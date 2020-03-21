import React, { Component } from "react";
import { Col, Row, FormGroup, Card, CardHeader, CardBody } from "reactstrap";

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOfCommunity: props.getStore().nameOfCommunity,
      nameOfCaste: props.getStore().nameOfCaste,
      casteCode: props.getStore().casteCode,
      sriLankanRefugee: props.getStore().sriLankanRefugee,
      differentlyAbled: props.getStore().differentlyAbled,
      selected_community_name: "",
      community_names: []
    };

    this._validateOnDemand = true; // this flag enables onBlur validation as user fills forms

    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {
    this.setState({
      community_names: [
        { id: "", name: "Please Select" },
        { id: "OC", name: "OC" },
        { id: "BC", name: "BC" },
        { id: "BCM", name: "BCM" },
        { id: "MBC & DNC", name: "MBC & DNC" },
        { id: "SC", name: "SC" },
        { id: "SCA", name: "SCA" },
        { id: "ST", name: "ST" }
      ]
    });
  }

  componentWillUnmount() {}

  isValidated() {
    const userinput = this._grabUserinput(); // grab user entered vals
    const validateNewinput = this._validateData(userinput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (
      Object.keys(validateNewinput).every(k => {
        return validateNewinput[k] === true;
      })
    ) {
      if (
        this.props.getStore().nameOfCommunity !== userinput.nameOfCommunity ||
        this.props.getStore().nameOfCaste !== userinput.nameOfCaste ||
        this.props.getStore().casteCode !== userinput.casteCode ||
        this.props.getStore().sriLankanRefugee !== userinput.sriLankanRefugee ||
        this.props.getStore().differentlyAbled !== userinput.differentlyAbled
      ) {
        // only update store of something changed
        this.props.updateStore({
          ...userinput,
          savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
        }); // Update store here (this is just an example, in reality you will do it via redux or flux)
      }

      isDataValid = true;
    } else {
      // if anything fails then update the UI validation nameOfCommunity but NOT the UI Data nameOfCommunity
      this.setState(
        Object.assign(
          userinput,
          validateNewinput,
          this._validationErrors(validateNewinput)
        )
      );
    }

    return isDataValid;
  }

  validationCheck() {
    if (!this._validateOnDemand) return;

    const userinput = this._grabUserinput(); // grab user entered vals
    const validateNewinput = this._validateData(userinput); // run the new input against the validator

    this.setnameOfCommunity(
      Object.assign(
        userinput,
        validateNewinput,
        this._validationErrors(validateNewinput)
      )
    );
  }

  _validateData(data) {
    return {
      nameOfCommunityVal: data.nameOfCommunity !== 0,
      nameOfCasteVal: data.nameOfCaste !== 0,
      casteCodeVal: data.casteCode !== 0,
      sriLankanRefugeeVal: data.sriLankanRefugee !== 0,
      differentlyAbledVal: data.differentlyAbled !== 0
    };
  }

  _validationErrors(val) {
    const errMsgs = {
      nameOfCommunityValMsg: val.nameOfCommunityVal ? "" : "* Field Required",
      nameOfCasteValMsg: val.nameOfCasteVal ? "" : "* Field Required",
      casteCodeValMsg: val.casteCodeVal ? "" : "* Field Required",
      sriLankanRefugeeValMsg: val.sriLankanRefugeeVal ? "" : "* Field Required",
      differentlyAbledValMsg: val.differentlyAbledVal ? "" : "* Field Required"
    };
    return errMsgs;
  }

  _grabUserinput() {
    return {
      nameOfCommunity: this.refs.nameOfCommunity.value,
      nameOfCaste: this.refs.nameOfCaste.value,
      casteCode: this.refs.casteCode.value,
      sriLankanRefugee: this.refs.sriLankanRefugee.value,
      differentlyAbled: this.refs.differentlyAbled.value
    };
  }

  listen_to_community_name_change = ({ target: { value } }) => {
    this.setState({ selected_community_name: value });
  };

  listen_to_caste_name_change = ({ target: { value } }) => {
    // console.log(Object.keys());
    if(value === 'Other') {
      this.setState({casteCode: 500})
    }
    else{
    const Caste_All_List = [
      "Adiyan",
      "Aranadan",
      "Eravallan",
      "Irular",
      "Kadar",
      "Kammara (excluding Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Kanikaran, Kanikkar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Kaniyan, Kanyan",
      "Kattunayakan",
      "Kochu Velan",
      "Konda Kapus",
      "Kondareddis",
      "Koraga",
      "Kota (excluding Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Kudiya, Melakudi",
      "Kurichchan",
      "Kurumbas (in the Nilgiris District)",
      "Kurumans",
      "Maha Malasar",
      "Malai Arayan",
      "Malai Pandaram",
      "Malai Vedan",
      "Malakkuravan",
      "Malasar",
      "Malayali (in Dharmapuri, North Arcot, Pudukkottai, Salem, South Arcot and Tiruchirapalli Districts)",
      "Malayakandi",
      "Mannan",
      "Mudugar, Muduvan",
      "Muthuvan",
      "Pallayan",
      "Palliyan",
      "Palliyar",
      "Paniyan",
      "Sholaga",
      "Toda (excluding Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Uraly",
      "Adi Dravida",
      "Adi Karnataka",
      "Ajila",
      "Ayyanavar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Baira",
      "Bakuda",
      "Bandi",
      "Bellara",
      "Bharatar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Chalavadi",
      "Chamar, Muchi",
      "Chandala",
      "Cheruman",
      "Devendrakulathan",
      "Dom, Dombara, Paidi, Pano",
      "Domban",
      "Godagali",
      "Godda",
      "Gosargi",
      "Holeya",
      "Jaggali",
      "Jambuvulu",
      "Kadaiyan",
      "Kakkalan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Kalladi",
      "Kanakkan, Padanna (in the Nilgiris District)",
      "Karimpalan",
      "Kavara (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Koliyan",
      "Koosa",
      "Kootan, Koodan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Kudumban",
      "Kuravan, Sidhanar",
      "Maila",
      "Mala",
      "Mannan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Mavilan",
      "Moger",
      "Mundala",
      "Nalakeyava",
      "Nayadi",
      "Padannan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Pallan",
      "Pulluvan",
      "Pambada",
      "Panan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Panchama",
      "Pannadi",
      "Panniandi",
      "Paraiyan, Parayan, Sambavar",
      "Paravan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Pathiyan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Pulayan, Cheramar",
      "Puthirai Vannan",
      "Raneyar",
      "Samagara",
      "Samban",
      "Sapari",
      "Semman",
      "Thandan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Tiruvalluvar",
      "Vallon",
      "Valluvan",
      "Vannan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Vathiriyan",
      "Velan",
      "Venganur Adi-Dravidar (in Vellore Dist.)",
      "Veppur Parayan (in Cuddalore District)",
      "Vetan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Vettiyan",
      "Vettuvan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Adi Andhra",
      "Arunthathiyar",
      "Chakkiliyan",
      "Madari",
      "Madiga",
      "Pagadai",
      "Thoti",
      "Ambalakarar",
      "Andipandaram",
      "Arayar (in Kanyakumari District)",
      "Bestha, Siviar",
      "Bhatraju (Other than Kshatriya Raju)",
      "Boyar, Oddar",
      "Dasari",
      "Dommara",
      "Eravallar (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where the Community is a Scheduled Tribe)",
      "Isaivellalar",
      "Jambuvanodai",
      "Jangam",
      "Jogi",
      "Kongu Chettiar (in Coimbatore and Erode Districts only)",
      "Koracha",
      "Kulala (including Kuyavar and Kumbarar)",
      "Kunnuvar Mannadi",
      "Kurumba, Kurumba Goundar",
      "Kuruhini Chetty",
      "Latin Catholic Christian Vannar (in Kanyakumari District)",
      "Maruthuvar, Navithar, Mangala, Velakattalavar,Velakatalanair and Pronopakari",
      "Mond Golla",
      "Moundadan Chetty",
      "Mahendra, Medara",
      "Mutlakampatti",
      "Narikoravar (Kuruvikars)",
      "Nokkar",
      "Panisaivan / Panisivan",
      "Vanniakula Kshatriya (including Vanniyar, Vanniya, Vannia Gounder, Gounder or Kander,Padayachi, Palli & Agnikula Kshatriya)",
      "Paravar (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where the Community is Scheduled Caste)",
      "Paravar converts to Christianity including the Paravar converts to Christianity of Kanyakumari District and Shenkottah Taluk in Tirunelveli District)",
      "Meenavar (Parvatharajakulam, Pattanavar,Sembadavar) (including converts to Christianity)",
      "Mukkuvar or Mukayar (including converts to Christianity)",
      "Punnan Vettuva Gounder",
      "Pannayar (other than Kathikarar in Kanyakumari District)",
      "Sathatha Srivaishnava (including Sathani,Chattadi and Chattada Srivaishnava)",
      "Sozhia Chetty",
      "Telugupatty Chetty",
      "Thottia Naicker (including Rajakambalam,Gollavar, Sillavar, Thockalavar, Thozhuva Naicker and Erragollar)",
      "Thondaman",
      "Thoraiyar (Nilgiris)",
      "Thoraiyar (Plains)",
      "Valaiyar (including Chettinad Valayars)",
      "Vannar (Salaivai Thozhilalar) (including Agasa, Madivala, Ekali, Rajakula, Veluthadar & Rajaka) (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where the Community is a Scheduled Caste)",
      "Vettaikarar",
      "Vettuva Gounder",
      "Yogeeswarar",
      "Attur Kilnad Koravars (Salem, Namakkal,Cuddalore, Villupuram, Ramanathapuram,Sivaganga and Virudhunagar Districts)",
      "Attur Melnad Koravars (Salem and NamakkalDistrict)",
      "Appanad Kondayam Kottai Maravar(Sivaganga, Virudhunagar, Ramanathapuram,Madurai, Theni and Dindigul Districts)",
      "Ambalakarar (Thanjavur, Nagapattinam,Tiruvarur, Tiruchirappalli, Karur, Perambalurand Pudukkottai Districts)",
      "Ambalakkarar (Suriyanur, TiruchirapalliDistrict)",
      "Boyas (Tiruchirapalli, Karur, Perambalur,Pudukkottai, The Nilgiris, Salem, Namakkal, Dharmapuri and Krishnagiri Districts)",
      "Battu Turkas",
      "C.K. Koravars (Cuddalore and Villupuram Districts)",
      "Chakkala (Sivaganga, Virudhunagar, Ramanathapuram, Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Tiruchirapalli, Karur, Perambalur, Madurai, Theni, Dindigul and the Nilgiris Districts)",
      "Changyampudi Koravars (Vellore and Thiruvannamalai Districts)",
      "Chettinad Valayars (Sivaganga, Virudhunagar and Ramanathapuram Districts)",
      "Dombs (Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts)",
      "Dobba Koravars (Salem and Namakkal Districts)",
      "Dommars (Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Vellore and Thiruvannamalai Districts)",
      "Donga Boya",
      "Donga Ur. Korachas",
      "Devagudi Talayaris",
      "Dobbai Korachas (Tiruchirapalli, Karur Perambalur and Pudukkottai Districts)",
      "Dabi Koravars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Vellore and Thiruvannamalai Districts)",
      "Donga Dasaris (Kancheepuram, Tiruvallur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Chennai, Salem and Namakkal Districts)",
      "Gorrela Dodda Boya",
      "Gudu Dasaris",
      "Gandarvakottai Koravars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Cuddalore and Villupuram Districts)",
      "Gandarvakottai Kallars (Thanjavur, Nagapattinam, Thiruvarur and Pudukkottai Districts)",
      "Inji Koravars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Jogis (Kancheepuram, Tiruvallur, Chennai, Cuddalore, Villupuram, Vellore and Thiruvannamalai Districts)",
      "Jambavanodai",
      "Kaladis (Sivaganga, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul, Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts)",
      "Kal Oddars (Kancheepuram, Thiruvallur, Ramanathapuram, Sivaganga, Virudhunagar, Madurai, Theni, Dindigul, Pudukkottai, Thanjavur, Nagapattinam, Tiruvarur, Tiruchirapalli, Karur, Perambalur, Tirunelveli, Thoothukudi, Salem and Namakkal Districts)",
      "Koravars (Kancheepuram, Tiruvallur, Ramanathapuram, Sivaganga, Virudhunagar, Pudukkottai, Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur, Tirunelveli, Thoothukudi, Chennai, Madurai, Theni, Dindigul and The Nilgiris Districts)",
      "Kalinji Dabikoravars (Thanjavur, Nagapattinam, Tiruvarur and Pudukkottai Districts)",
      "Kootappal Kallars (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Kala Koravars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Kalavathila Boyas",
      "Kepmaris (Kancheepuram, Tiruvallur,    Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts)",
      "Maravars (Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Ramanathapuram, Sivaganga, Virudhunagar, Tirunelveli and Thoothukudi Districts)",
      "Monda Koravars",
      "Monda Golla (Salem and Namakkal Districts)",
      "Mutlakampatti (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Nokkars (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Nellorepet Oddars (Vellore and Thiruvannamalai Districts)",
      "Oddars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Madurai, Theni and Dindigul Districts)",
      "Pedda Boyas (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Ponnai Koravars (Vellore and Thiruvannamalai Districts)",
      "Piramalai Kallars (Sivagangai, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul, Pudukkottai, Thanjavur, Nagapattinam and Thiruvarur Districts)",
      "Periya Suriyur Kallars (Tiruchirapalli, Karur, Perambalur, and Pudukkottai Districts)",
      "Padayachi (Vellayan Kuppam in Cuddalore District and Tennore in Tiruchirapalli District)",
      "Punnan Vettuva Gounder (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Servai (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Salem Melnad Koravars (Madurai, Theni, Dindigul, Coimbatore, Erode, Pudukkottai, Tiruchirapalli, Karur, Perambalur, Salem, Namakkal, Vellore and Thiruvannamalai Districts)",
      "Salem Uppu Koravars (Salem and Namakkal Dist.)",
      "Sakkaraithamadai Koravars (Vellore and Thiruvannamalai districts)",
      "Saranga Palli Koravars",
      "Sooramari Oddars (Salem and Namakkal Districts)",
      "Sembanad Maravars (Sivaganga, Virudhunagar and Ramanathapuram Districts)",
      "Thalli Koravars (Salem and Namakkal Districts)",
      "Telungapatti Chettis (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Thottia Naickers (Sivaganga, Virudhunagar, Ramanathapuram, Kancheepuram, Tiruvallur, Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur. Pudukkottai, Tirunelveli, Thoothukudi, Salem, Namakkal, Vellore,    Thiruvannamalai, Coimbatore & Erode Districts)",
      "Thogamalai Koravars or Kepmaris (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Uppukoravars or Settipalli Koravars (Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Madurai, Theni, Dindigul, Vellore and Thiruvannamalai Dist.)",
      "Urali Gounders (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Wayalpad or Nawalpeta Korachas",
      "Vaduvarpatti Koravars (Madurai, Theni, Dindigul, Ramanathapuram, Sivaganga, Virudhunagar, Tirunelveli, Thoothukudi, Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Valayars (Madurai, Theni, Dindigul, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Erode and Coimbatore Districts)",
      "Vettaikarar (Thanjavur, Nagapattinam, Thiruvarur and Pudukkottai Districts)",
      "Vetta koravars (Salem and Namakkal District)",
      "Varaganeri Koravars (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Vettuva Gounder (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Agamudayar including Thozhu or Thuluva Vellala",
      "Agaram Vellan Chettiar",
      "Alwar, Azhavar and Alavar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Servai (except Tiruchirappalli, Karur, Perambalur and Pudukkottai Districts)",
      "Nulayar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Archakarai Vellala",
      "Aryavathi (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Ayira Vaisyar",
      "Badagar",
      "Billava",
      "Bondil",
      "Boyas (except Tiruchirappalli, Karur, Perambalur, Pudukkottai, The Nilgiris, Salem, Namakkal, Dharmapuri and Krishnagiri Districts) Pedda Boyar (except Tiruchirappalli, Karur, Perambalur and Pudukkottai Districts) Oddars (except Thanjavur, Nagapattinam, Thiruvarur,   Tiruchirappalli, Karur, Perambalur, Pudukkottai, Madurai, Theni and Dindigul Districts) Kaloddars (except Kancheepuram, Tiruvallur, Ramanathapuram, Sivaganga, Virudhunagar, Madurai, Theni, Dindigul, Pudukkottai, Tiruchirappalli, Karur, Perambalur, Tirunelveli, Thoothukudi, Salem & Namakkal Districts) Nellorepet Oddars (except Vellore and Thiruvannamalai Districts) Sooramari Oddars (except Salem and Namakkal Districts)",
      "Chakkala (except Sivaganga, Virudhunagar, Ramanathapuram, Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Tiruchirappalli, Karur, Perambalur, Madurai, Theni, Dindigul and The Nilgiris Districts)",
      "Chavalakarar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Chettu or Chetty (including Kottar Chetty, Elur Chetty, Pathira Chetty, Valayal Chetty, Pudukadai Chetty) (in  Kanyakumari District and  Shenkottah Taluk of Tirunelveli District)",
      "Chowdry",
      "Converts to Christianity from Scheduled Castes irrespective of the generation of conversion (except the Paravar converts to Christianity of Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "C.S.I. formerly S.I.U.C. (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Donga Dasaris (except Kancheepuram Tiruvallur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Chennai, Salem and Namakkal Districts)",
      "Devangar, Sedar",
      "Dombs (except Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts) Dommars (except Thanjavur, Nagapattinam, Tiruvarur, Pudukkottai, Vellore and Thiruvannamalai Districts)",
      "Enadi",
      "Ezhavathy (in Kanyakumari Districts and Shenkottah Taluk of Tirunelveli District)",
      "Ezhuthachar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Ezhuva (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Gangavar",
      "Gavara, Gavarai & Vadugar (Vaduvar) (other than Kamma, Kapu, Balija & Reddi)",
      "Gounder",
      "Gowda (including Gammala, Kalali and Anuppa Gounder)",
      "Hegde",
      "Idiga",
      "Illathu Pillaimar, Illuvar, Ezhuvar & Illathar",
      "Jhetty",
      "Jogis (except Kancheepuram, Tiruvallur, Madurai, Theni, Dindigul, Cuddalore, Villupuram, Vellore and Thiruvannamalai Districts)",
      "Kabbera",
      "Kaikolar, Sengunthar",
      "Kaladi (except Sivaganga, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul, Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts)",
      "Kalari Kurup including Kalari Panicker (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Kalingi",
      "Kallar Easanattu Kallar Gandharvakottai Kallars (except Thanjavur, Nagapattinam, Thiruvarur and Pudukkottai Districts) Kottappal Kallars (except Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts) Piramalai Kallars (except Sivaganga, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul, Pudukkottai, Thanjavur, Nagapattinam and Thiruvarur Districts) Periyasooriyur Kallars (except Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)",
      "Kallar Kula Thondaman",
      "Kalveli Gounder",
      "Kambar",
      "Kammalar or Viswakarma, Viswakarmala (including Thattar, Porkollar, Kannar, Karumar, Kollar, Thacher, Kal Thacher, Kamsala and Viswabrahmin)",
      "Kani, Kanisu, Kaniyar Panikkar",
      "Kaniyala Vellalar",
      "Kannada Saineegar, Kannadiyar (Through out the State) and Dasapalanjika (Coimbatore, Erode and the Nilgiris Districts)",
      "Kannadiya Naidu",
      "Karpoora Chettiar",
      "Karuneegar (Seer Karuneegar, Sri Karuneegar, Sarattu Karuneegar, Kaikatti Karuneegar, Mathuvazhi Kanakkar, Sozhi Kanakkar & Sunnambu Karuneegar)",
      "Kasukkara Chettiar",
      "Katesar Pattamkatti",
      "Kavuthiyar",
      "Kerala Mudali",
      "Kharvi",
      "Khatri",
      "Kongu Vaishnava",
      "Kongu Vellalars (including Vellala Gounder, Nattu Gounder, Narambukatti Gounder, Tirumudi Vellalar, Thondu Vellalar, Pala Gounder, Poosari Gounder, Anuppa Vellala Gounder, Padaithalai Gounder, Chendalai Gounder, Pavalankatti Vellala Gounder, Palla Vellala Gounder, Sanku Vellala Gounder, & Rathinagiri Gounder)",
      "Koppala Velama",
      "Koteyar",
      "Krishnanvaka (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Kudikara Vellalar",
      "Kudumbi (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Kuga Vellalar",
      "Kunchidigar",
      "Latin Catholics except Latin Catholic Vannar in Kanyakumari District",
      "Latin Catholics in Shenkottah Taluk of Tirunelveli District",
      "Lambadi",
      "Lingayat (Jangama)",
      "Mahratta (NonBrahmin) (including Namadev  Mahratta)",
      "Malayar",
      "Male",
      "Maniagar",
      "Maravars (except Thanjavur, Nagapattinam,Tiruvarur, Pudukkottai, Ramanathapuram,Sivaganga, Virudhunagar, Tirunelveli andThoothukudi Districts) (including Karumaravars.Appanad Kondayamkottai Maravar (exceptSivaganga, Virudhunagar, Ramanathapuram,Madurai, Theni and Dindigul Districts) and            Sambanad Maravars (except Sivaganga,            Virudhunagar and Ramanathapuram Districts)",
      "Moondrumandai Enbathunalu (84) Ur. Sozhia Vellalar",
      "Mooppan",
      "Muthuraja, Muthuracha, Muttiriyar, Mutharaiyar",
      "Nadar, Shanar & Gramani including Christian Nadar, Christian Shanar and Christian Gramani",
      "Nagaram",
      "Naikkar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Nangudi Vellalar",
      "Nanjil Mudali (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Odar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Odiya",
      "Oottruvalanattu Vellalar",
      "O.P.S. Vellalar",
      "Ovachar",
      "Paiyur Kotta Vellalar",
      "Pamulu",
      "Panar (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where the  Community is a Scheduled Caste)",
      "Pandiya Vellalar",
      "Omitted",
      "Kathikarar in Kanyakumari District",
      "Pannirandam Chettiar or Uthama Chettiar",
      "Parkavakulam (including Surithimar Nathamar,Malayamar, Moopanar & Nainar)",
      "Perike (including Perike Balija)",
      "Perumkollar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Podikara Vellalar",
      "Pooluva Gounder",
      "Poraya",
      "Pulavar (in Coimbatore and Erode Districts)",
      "Pulluvar or Pooluvar",
      "Pusala",
      "Reddy (Ganjam)",
      "Sadhu Chetty (including Telugu Chetty Twenty four manai Telugu Chetty)",
      "Sakkaravar or Kavathi (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Salivagana",
      "Saliyar, Padmasaliyar, Pattusaliyar, Pattariyar and Adhaviyar",
      "Savalakkarar",
      "Senaithalaivar, Senaikudiyar and IIaivaniar",
      "Serakula Vellalar",
      "Sourashtra (Patnulkarar)",
      "Sozhia Vellalar (including Sozha Vellalar,Vetrilaikarar, Kodikalkarar and Keeraikarar)",
      "Srisayar",
      "Sundaram Chetty",
      "Thogatta Veerakshatriya",
      "Tholkollar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Tholuva Naicker and Vetalakara Naicker",
      "Omitted",
      "Thoriyar",
      "Ukkirakula Kshatriya Naicker",
      "Uppara, Uppillia and Sagara",
      "Urali Gounder (except Tiruchirapalli Karur,Perambalur and Pudukkottai Districts) and OrudayaGounder or Oorudaya Gounder (in Madurai, Theni,Dindigul, Coimbatore, Erode, Tiruchirapalli, Karur,Perambalur, Pudukkottai, Salem and Namakkal           Districts)",
      "Urikkara Nayakkar",
      "Virakodi Vellala",
      "Vallambar",
      "Vallanattu Chettiar",
      "Valmiki",
      "Vaniyar, Vania Chettiar (including Gandla, Ganika,Telikula and Chekkalar)",
      "Veduvar and Vedar (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where theCommunity is a Scheduled Castes)",
      "Veerasaiva (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Velar",
      "Vellan Chettiar",
      "Veluthodathu Nair (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)",
      "Vokkaligar (including Vakkaligar, Okkaligar,Kappaliyar, Kappiliya, Okkaliga Gowda, Okkaliya-Gowder, Okkaliya-Gowda, Okkaliya Gowda)",
      "Wynad Chetty (The Nilgiris District)",
      "Yadhava (including Idaiyar, Telugu Speaking Idaiyar known as Vaduga Ayar or Vaduga Idaiyar or Golla and Asthanthra Golla)",
      "Yavana",
      "Yerukula",
      "Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community (except the Converts to Christianity from  Meenavar, Parvatharajakulam, Pattanavar, Sembadavar,Mukkuvar or Mukayar and Paravar) or Denotified  Communities",
      "Orphans and destitutes children who have lost their Parents before reaching the age of ten and are destitutes; and who have nobody else to take care of             them either by law or custom; and also who are             admitted into any of the Schools or orphanages run by             the Government or recognised by the Government.",
      "Ansar",
      "Dekkani Muslims",
      "Dudekula",
      "Labbais including Rowthar and Marakayar (whether their spoken language is Tamil or Urdu)",
      "Mapilla",
      "Sheik",
      "Syed"
    ];
    const index_of_caste = (Caste_All_List.indexOf(value) + 1).toString();
    this.setState({ casteCode: index_of_caste });
  }
  };

  render() {
    // explicit class assigning based on validation
    let notValidClasses = {};

    //nameofcommunity
    if (
      typeof this.state.nameOfCommunityVal == "undefined" ||
      this.state.nameOfCommunityVal
    ) {
      notValidClasses.nameOfCommunityCls = "no-error col-md-10";
    } else {
      notValidClasses.nameOfCommunityCls = "has-error col-md-10";
      notValidClasses.nameOfCommunityValGrpCls = "val-err-tooltip";
    }

    //nameofcaste
    if (
      typeof this.state.nameOfCasteVal == "undefined" ||
      this.state.nameOfCasteVal
    ) {
      notValidClasses.nameOfCasteCls = "no-error col-md-10";
    } else {
      notValidClasses.nameOfCasteCls = "has-error col-md-10";
      notValidClasses.nameOfCasteValGrpCls = "val-err-tooltip";
    }

    //castecode
    if (
      typeof this.state.casteCodeVal == "undefined" ||
      this.state.casteCodeVal
    ) {
      notValidClasses.casteCodeCls = "no-error col-md-10";
    } else {
      notValidClasses.casteCodeCls = "has-error col-md-10";
      notValidClasses.casteCodeValGrpCls = "val-err-tooltip";
    }

    //sriLankanRefugee
    if (
      typeof this.state.sriLankanRefugeeVal == "undefined" ||
      this.state.sriLankanRefugeeVal
    ) {
      notValidClasses.sriLankanRefugeeCls = "no-error col-md-10";
    } else {
      notValidClasses.sriLankanRefugeeCls = "has-error col-md-10";
      notValidClasses.sriLankanRefugeeValGrpCls = "val-err-tooltip";
    }

    //differentlyAbled
    if (
      typeof this.state.differentlyAbledVal == "undefined" ||
      this.state.differentlyAbledVal
    ) {
      notValidClasses.differentlyAbledCls = "no-error col-md-10";
    } else {
      notValidClasses.differentlyAbledCls = "has-error col-md-10";
      notValidClasses.differentlyAbledValGrpCls = "val-err-tooltip";
    }

    const caste_list = {
      OC: [
        { id: "", text: "Please Select" },
        { id: "Other", text: "Other" }
      ],

      BC: [
        { id: "", text: "Please Select" },
        { id: "230", text: "Agamudayar including Thozhu or Thuluva Vellala" },
        { id: "231", text: "Agaram Vellan Chettiar" },
        {
          id: "232",
          text:
            "Alwar, Azhavar and Alavar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "233",
          text:
            "Servai (except Tiruchirappalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "234",
          text:
            "Nulayar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "235", text: "Archakarai Vellala" },
        {
          id: "236",
          text:
            "Aryavathi (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "237", text: "Ayira Vaisyar" },
        { id: "238", text: "Badagar" },
        { id: "239", text: "Billava" },
        { id: "240", text: "Bondil" },
        {
          id: "241",
          text:
            "Boyas (except Tiruchirappalli, Karur, Perambalur, Pudukkottai, The Nilgiris, Salem, Namakkal, Dharmapuri and Krishnagiri Districts) Pedda Boyar (except Tiruchirappalli, Karur, Perambalur and Pudukkottai Districts) Oddars (except Thanjavur, Nagapattinam, Thiruvarur,   Tiruchirappalli, Karur, Perambalur, Pudukkottai, Madurai, Theni and Dindigul Districts) Kaloddars (except Kancheepuram, Tiruvallur, Ramanathapuram, Sivaganga, Virudhunagar, Madurai, Theni, Dindigul, Pudukkottai, Tiruchirappalli, Karur, Perambalur, Tirunelveli, Thoothukudi, Salem & Namakkal Districts) Nellorepet Oddars (except Vellore and Thiruvannamalai Districts) Sooramari Oddars (except Salem and Namakkal Districts)"
        },
        {
          id: "242",
          text:
            "Chakkala (except Sivaganga, Virudhunagar, Ramanathapuram, Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Tiruchirappalli, Karur, Perambalur, Madurai, Theni, Dindigul and The Nilgiris Districts)"
        },
        {
          id: "243",
          text:
            "Chavalakarar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "244",
          text:
            "Chettu or Chetty (including Kottar Chetty, Elur Chetty, Pathira Chetty, Valayal Chetty, Pudukadai Chetty) (in  Kanyakumari District and  Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "245", text: "Chowdry" },
        {
          id: "246",
          text:
            "Converts to Christianity from Scheduled Castes irrespective of the generation of conversion (except the Paravar converts to Christianity of Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "247",
          text:
            "C.S.I. formerly S.I.U.C. (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "248",
          text:
            "Donga Dasaris (except Kancheepuram Tiruvallur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Chennai, Salem and Namakkal Districts)"
        },
        { id: "249", text: "Devangar, Sedar" },
        {
          id: "250",
          text:
            "Dombs (except Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts) Dommars (except Thanjavur, Nagapattinam, Tiruvarur, Pudukkottai, Vellore and Thiruvannamalai Districts)"
        },
        { id: "251", text: "Enadi" },
        {
          id: "252",
          text:
            "Ezhavathy (in Kanyakumari Districts and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "253",
          text:
            "Ezhuthachar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "254",
          text:
            "Ezhuva (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "255", text: "Gangavar" },
        {
          id: "256",
          text:
            "Gavara, Gavarai & Vadugar (Vaduvar) (other than Kamma, Kapu, Balija & Reddi)"
        },
        { id: "257", text: "Gounder" },
        {
          id: "258",
          text: "Gowda (including Gammala, Kalali and Anuppa Gounder)"
        },
        { id: "259", text: "Hegde" },
        { id: "260", text: "Idiga" },
        { id: "261", text: "Illathu Pillaimar, Illuvar, Ezhuvar & Illathar" },
        { id: "262", text: "Jhetty" },
        {
          id: "263",
          text:
            "Jogis (except Kancheepuram, Tiruvallur, Madurai, Theni, Dindigul, Cuddalore, Villupuram, Vellore and Thiruvannamalai Districts)"
        },
        { id: "264", text: "Kabbera" },
        { id: "265", text: "Kaikolar, Sengunthar" },
        {
          id: "266",
          text:
            "Kaladi (except Sivaganga, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul, Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts)"
        },
        {
          id: "267",
          text:
            "Kalari Kurup including Kalari Panicker (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "268", text: "Kalingi" },
        {
          id: "269",
          text:
            "Kallar Easanattu Kallar Gandharvakottai Kallars (except Thanjavur, Nagapattinam, Thiruvarur and Pudukkottai Districts) Kottappal Kallars (except Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts) Piramalai Kallars (except Sivaganga, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul, Pudukkottai, Thanjavur, Nagapattinam and Thiruvarur Districts) Periyasooriyur Kallars (except Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        { id: "270", text: "Kallar Kula Thondaman" },
        { id: "271", text: "Kalveli Gounder" },
        { id: "272", text: "Kambar" },
        {
          id: "273",
          text:
            "Kammalar or Viswakarma, Viswakarmala (including Thattar, Porkollar, Kannar, Karumar, Kollar, Thacher, Kal Thacher, Kamsala and Viswabrahmin)"
        },
        { id: "274", text: "Kani, Kanisu, Kaniyar Panikkar" },
        { id: "275", text: "Kaniyala Vellalar" },
        {
          id: "276",
          text:
            "Kannada Saineegar, Kannadiyar (Through out the State) and Dasapalanjika (Coimbatore, Erode and the Nilgiris Districts)"
        },
        { id: "277", text: "Kannadiya Naidu" },
        { id: "278", text: "Karpoora Chettiar" },
        {
          id: "279",
          text:
            "Karuneegar (Seer Karuneegar, Sri Karuneegar, Sarattu Karuneegar, Kaikatti Karuneegar, Mathuvazhi Kanakkar, Sozhi Kanakkar & Sunnambu Karuneegar)"
        },
        { id: "280", text: "Kasukkara Chettiar" },
        { id: "281", text: "Katesar Pattamkatti" },
        { id: "282", text: "Kavuthiyar" },
        { id: "283", text: "Kerala Mudali" },
        { id: "284", text: "Kharvi" },
        { id: "285", text: "Khatri" },
        { id: "286", text: "Kongu Vaishnava" },
        {
          id: "287",
          text:
            "Kongu Vellalars (including Vellala Gounder, Nattu Gounder, Narambukatti Gounder, Tirumudi Vellalar, Thondu Vellalar, Pala Gounder, Poosari Gounder, Anuppa Vellala Gounder, Padaithalai Gounder, Chendalai Gounder, Pavalankatti Vellala Gounder, Palla Vellala Gounder, Sanku Vellala Gounder, & Rathinagiri Gounder)"
        },
        { id: "288", text: "Koppala Velama" },
        { id: "289", text: "Koteyar" },
        {
          id: "290",
          text:
            "Krishnanvaka (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "291", text: "Kudikara Vellalar" },
        {
          id: "292",
          text:
            "Kudumbi (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "293", text: "Kuga Vellalar" },
        { id: "294", text: "Kunchidigar" },
        {
          id: "295",
          text:
            "Latin Catholics except Latin Catholic Vannar in Kanyakumari District"
        },
        {
          id: "296",
          text: "Latin Catholics in Shenkottah Taluk of Tirunelveli District"
        },
        { id: "297", text: "Lambadi" },
        { id: "298", text: "Lingayat (Jangama)" },
        {
          id: "299",
          text: "Mahratta (NonBrahmin) (including Namadev  Mahratta)"
        },
        { id: "300", text: "Malayar" },
        { id: "301", text: "Male" },
        { id: "302", text: "Maniagar" },
        {
          id: "303",
          text:
            "Maravars (except Thanjavur, Nagapattinam,Tiruvarur, Pudukkottai, Ramanathapuram,Sivaganga, Virudhunagar, Tirunelveli andThoothukudi Districts) (including Karumaravars.Appanad Kondayamkottai Maravar (exceptSivaganga, Virudhunagar, Ramanathapuram,Madurai, Theni and Dindigul Districts) and            Sambanad Maravars (except Sivaganga,            Virudhunagar and Ramanathapuram Districts)"
        },
        {
          id: "304",
          text: "Moondrumandai Enbathunalu (84) Ur. Sozhia Vellalar"
        },
        { id: "305", text: "Mooppan" },
        { id: "306", text: "Muthuraja, Muthuracha, Muttiriyar, Mutharaiyar" },
        {
          id: "307",
          text:
            "Nadar, Shanar & Gramani including Christian Nadar, Christian Shanar and Christian Gramani"
        },
        { id: "308", text: "Nagaram" },
        {
          id: "309",
          text:
            "Naikkar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "310", text: "Nangudi Vellalar" },
        {
          id: "311",
          text:
            "Nanjil Mudali (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "312",
          text:
            "Odar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "313", text: "Odiya" },
        { id: "314", text: "Oottruvalanattu Vellalar" },
        { id: "315", text: "O.P.S. Vellalar" },
        { id: "316", text: "Ovachar" },
        { id: "317", text: "Paiyur Kotta Vellalar" },
        { id: "318", text: "Pamulu" },
        {
          id: "319",
          text:
            "Panar (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where the  Community is a Scheduled Caste)"
        },
        { id: "320", text: "Pandiya Vellalar" },
        { id: "321", text: "Omitted" },
        { id: "322", text: "Kathikarar in Kanyakumari District" },
        { id: "323", text: "Pannirandam Chettiar or Uthama Chettiar" },
        {
          id: "324",
          text:
            "Parkavakulam (including Surithimar Nathamar,Malayamar, Moopanar & Nainar)"
        },
        { id: "325", text: "Perike (including Perike Balija)" },
        {
          id: "326",
          text:
            "Perumkollar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "327", text: "Podikara Vellalar" },
        { id: "328", text: "Pooluva Gounder" },
        { id: "329", text: "Poraya" },
        { id: "330", text: "Pulavar (in Coimbatore and Erode Districts)" },
        { id: "331", text: "Pulluvar or Pooluvar" },
        { id: "332", text: "Pusala" },
        { id: "333", text: "Reddy (Ganjam)" },
        {
          id: "334",
          text:
            "Sadhu Chetty (including Telugu Chetty Twenty four manai Telugu Chetty)"
        },
        {
          id: "335",
          text:
            "Sakkaravar or Kavathi (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "336", text: "Salivagana" },
        {
          id: "337",
          text: "Saliyar, Padmasaliyar, Pattusaliyar, Pattariyar and Adhaviyar"
        },
        { id: "338", text: "Savalakkarar" },
        { id: "339", text: "Senaithalaivar, Senaikudiyar and IIaivaniar" },
        { id: "340", text: "Serakula Vellalar" },
        { id: "341", text: "Sourashtra (Patnulkarar)" },
        {
          id: "342",
          text:
            "Sozhia Vellalar (including Sozha Vellalar,Vetrilaikarar, Kodikalkarar and Keeraikarar)"
        },
        { id: "343", text: "Srisayar" },
        { id: "344", text: "Sundaram Chetty" },
        { id: "345", text: "Thogatta Veerakshatriya" },
        {
          id: "346",
          text:
            "Tholkollar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "347", text: "Tholuva Naicker and Vetalakara Naicker" },
        { id: "348", text: "Omitted" },
        { id: "349", text: "Thoriyar" },
        { id: "350", text: "Ukkirakula Kshatriya Naicker" },
        { id: "351", text: "Uppara, Uppillia and Sagara" },
        {
          id: "352",
          text:
            "Urali Gounder (except Tiruchirapalli Karur,Perambalur and Pudukkottai Districts) and OrudayaGounder or Oorudaya Gounder (in Madurai, Theni,Dindigul, Coimbatore, Erode, Tiruchirapalli, Karur,Perambalur, Pudukkottai, Salem and Namakkal           Districts)"
        },
        { id: "353", text: "Urikkara Nayakkar" },
        { id: "354", text: "Virakodi Vellala" },
        { id: "355", text: "Vallambar" },
        { id: "356", text: "Vallanattu Chettiar" },
        { id: "357", text: "Valmiki" },
        {
          id: "358",
          text:
            "Vaniyar, Vania Chettiar (including Gandla, Ganika,Telikula and Chekkalar)"
        },
        {
          id: "359",
          text:
            "Veduvar and Vedar (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where theCommunity is a Scheduled Castes)"
        },
        {
          id: "360",
          text:
            "Veerasaiva (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "361", text: "Velar" },
        { id: "362", text: "Vellan Chettiar" },
        {
          id: "363",
          text:
            "Veluthodathu Nair (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "364",
          text:
            "Vokkaligar (including Vakkaligar, Okkaligar,Kappaliyar, Kappiliya, Okkaliga Gowda, Okkaliya-Gowder, Okkaliya-Gowda, Okkaliya Gowda)"
        },
        { id: "365", text: "Wynad Chetty (The Nilgiris District)" },
        {
          id: "366",
          text:
            "Yadhava (including Idaiyar, Telugu Speaking Idaiyar known as Vaduga Ayar or Vaduga Idaiyar or Golla and Asthanthra Golla)"
        },
        { id: "367", text: "Yavana" },
        { id: "368", text: "Yerukula" },
        {
          id: "369",
          text:
            "Converts to Christianity from any Hindu Backward Classes Community or Most Backward Classes Community (except the Converts to Christianity from  Meenavar, Parvatharajakulam, Pattanavar, Sembadavar,Mukkuvar or Mukayar and Paravar) or Denotified  Communities"
        },
        {
          id: "370",
          text:
            "Orphans and destitutes children who have lost their Parents before reaching the age of ten and are destitutes; and who have nobody else to take care of them either by law or custom; and also who are admitted into any of the Schools or orphanages run by             the Government or recognised by the Government."
        }
      ],
      BCM: [
        { id: "", text: "Please Select" },
        { id: "371", text: "Ansar" },
        { id: "372", text: "Dekkani Muslims" },
        { id: "373", text: "Dudekula" },
        {
          id: "374",
          text:
            "Labbais including Rowthar and Marakayar (whether their spoken language is Tamil or Urdu)"
        },
        { id: "375", text: "Mapilla" },
        { id: "376", text: "Sheik" },
        { id: "377", text: "Syed" }
      ],
      "MBC & DNC": [
        { id: "", text: "Please Select" },
        { id: "108", text: "Adi Andhra" },
        { id: "109", text: "Arunthathiyar" },
        { id: "110", text: "Chakkiliyan" },
        { id: "111", text: "Madari" },
        { id: "112", text: "Madiga" },
        { id: "113", text: "Pagadai" },
        { id: "114", text: "Thoti" },
        { id: "115", text: "Ambalakarar" },
        { id: "116", text: "Andipandaram" },
        { id: "117", text: "Arayar (in Kanyakumari District)" },
        { id: "118", text: "Bestha, Siviar" },
        { id: "119", text: "Bhatraju (Other than Kshatriya Raju)" },
        { id: "120", text: "Boyar, Oddar" },
        { id: "121", text: "Dasari" },
        { id: "122", text: "Dommara" },
        {
          id: "123",
          text:
            "Eravallar (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where the Community is a Scheduled Tribe)"
        },
        { id: "124", text: "Isaivellalar" },
        { id: "125", text: "Jambuvanodai" },
        { id: "126", text: "Jangam" },
        { id: "127", text: "Jogi" },
        {
          id: "128",
          text: "Kongu Chettiar (in Coimbatore and Erode Districts only)"
        },
        { id: "129", text: "Koracha" },
        { id: "130", text: "Kulala (including Kuyavar and Kumbarar)" },
        { id: "131", text: "Kunnuvar Mannadi" },
        { id: "132", text: "Kurumba, Kurumba Goundar" },
        { id: "133", text: "Kuruhini Chetty" },
        {
          id: "134",
          text: "Latin Catholic Christian Vannar (in Kanyakumari District)"
        },
        {
          id: "135",
          text:
            "Maruthuvar, Navithar, Mangala, Velakattalavar,Velakatalanair and Pronopakari"
        },
        { id: "136", text: "Mond Golla" },
        { id: "137", text: "Moundadan Chetty" },
        { id: "138", text: "Mahendra, Medara" },
        { id: "139", text: "Mutlakampatti" },
        { id: "140", text: "Narikoravar (Kuruvikars)" },
        { id: "141", text: "Nokkar" },
        { id: "142", text: "Panisaivan / Panisivan" },
        {
          id: "143",
          text:
            "Vanniakula Kshatriya (including Vanniyar, Vanniya, Vannia Gounder, Gounder or Kander,Padayachi, Palli & Agnikula Kshatriya)"
        },
        {
          id: "144",
          text:
            "Paravar (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where the Community is Scheduled Caste)"
        },
        {
          id: "145",
          text:
            "Paravar converts to Christianity including the Paravar converts to Christianity of Kanyakumari District and Shenkottah Taluk in Tirunelveli District)"
        },
        {
          id: "146",
          text:
            "Meenavar (Parvatharajakulam, Pattanavar,Sembadavar) (including converts to Christianity)"
        },
        {
          id: "147",
          text: "Mukkuvar or Mukayar (including converts to Christianity)"
        },
        { id: "148", text: "Punnan Vettuva Gounder" },
        {
          id: "149",
          text: "Pannayar (other than Kathikarar in Kanyakumari District)"
        },
        {
          id: "150",
          text:
            "Sathatha Srivaishnava (including Sathani,Chattadi and Chattada Srivaishnava)"
        },
        { id: "151", text: "Sozhia Chetty" },
        { id: "152", text: "Telugupatty Chetty" },
        {
          id: "153",
          text:
            "Thottia Naicker (including Rajakambalam,Gollavar, Sillavar, Thockalavar, Thozhuva Naicker and Erragollar)"
        },
        { id: "154", text: "Thondaman" },
        { id: "155", text: "Thoraiyar (Nilgiris)" },
        { id: "156", text: "Thoraiyar (Plains)" },
        { id: "157", text: "Valaiyar (including Chettinad Valayars)" },
        {
          id: "158",
          text:
            "Vannar (Salaivai Thozhilalar) (including Agasa, Madivala, Ekali, Rajakula, Veluthadar & Rajaka) (except in Kanyakumari District and Shenkottah Taluk of Tirunelveli District where the Community is a Scheduled Caste)"
        },
        { id: "159", text: "Vettaikarar" },
        { id: "160", text: "Vettuva Gounder" },
        { id: "161", text: "Yogeeswarar" },
        {
          id: "162",
          text:
            "Attur Kilnad Koravars (Salem, Namakkal,Cuddalore, Villupuram, Ramanathapuram,Sivaganga and Virudhunagar Districts)"
        },
        {
          id: "163",
          text: "Attur Melnad Koravars (Salem and NamakkalDistrict)"
        },
        {
          id: "164",
          text:
            "Appanad Kondayam Kottai Maravar(Sivaganga, Virudhunagar, Ramanathapuram,Madurai, Theni and Dindigul Districts)"
        },
        {
          id: "165",
          text:
            "Ambalakarar (Thanjavur, Nagapattinam,Tiruvarur, Tiruchirappalli, Karur, Perambalurand Pudukkottai Districts)"
        },
        { id: "166", text: "Ambalakkarar (Suriyanur, TiruchirapalliDistrict)" },
        {
          id: "167",
          text:
            "Boyas (Tiruchirapalli, Karur, Perambalur,Pudukkottai, The Nilgiris, Salem, Namakkal, Dharmapuri and Krishnagiri Districts)"
        },
        { id: "168", text: "Battu Turkas" },
        {
          id: "169",
          text: "C.K. Koravars (Cuddalore and Villupuram Districts)"
        },
        {
          id: "170",
          text:
            "Chakkala (Sivaganga, Virudhunagar, Ramanathapuram, Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Tiruchirapalli, Karur, Perambalur, Madurai, Theni, Dindigul and the Nilgiris Districts)"
        },
        {
          id: "171",
          text: "Changyampudi Koravars (Vellore and Thiruvannamalai Districts)"
        },
        {
          id: "172",
          text:
            "Chettinad Valayars (Sivaganga, Virudhunagar and Ramanathapuram Districts)"
        },
        {
          id: "173",
          text:
            "Dombs (Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts)"
        },
        { id: "174", text: "Dobba Koravars (Salem and Namakkal Districts)" },
        {
          id: "175",
          text:
            "Dommars (Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Vellore and Thiruvannamalai Districts)"
        },
        { id: "176", text: "Donga Boya" },
        { id: "177", text: "Donga Ur. Korachas" },
        { id: "178", text: "Devagudi Talayaris" },
        {
          id: "179",
          text:
            "Dobbai Korachas (Tiruchirapalli, Karur Perambalur and Pudukkottai Districts)"
        },
        {
          id: "180",
          text:
            "Dabi Koravars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Vellore and Thiruvannamalai Districts)"
        },
        {
          id: "181",
          text:
            "Donga Dasaris (Kancheepuram, Tiruvallur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Chennai, Salem and Namakkal Districts)"
        },
        { id: "182", text: "Gorrela Dodda Boya" },
        { id: "183", text: "Gudu Dasaris" },
        {
          id: "184",
          text:
            "Gandarvakottai Koravars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Cuddalore and Villupuram Districts)"
        },
        {
          id: "185",
          text:
            "Gandarvakottai Kallars (Thanjavur, Nagapattinam, Thiruvarur and Pudukkottai Districts)"
        },
        {
          id: "186",
          text:
            "Inji Koravars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "187",
          text:
            "Jogis (Kancheepuram, Tiruvallur, Chennai, Cuddalore, Villupuram, Vellore and Thiruvannamalai Districts)"
        },
        { id: "188", text: "Jambavanodai" },
        {
          id: "189",
          text:
            "Kaladis (Sivaganga, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul, Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts)"
        },
        {
          id: "190",
          text:
            "Kal Oddars (Kancheepuram, Thiruvallur, Ramanathapuram, Sivaganga, Virudhunagar, Madurai, Theni, Dindigul, Pudukkottai, Thanjavur, Nagapattinam, Tiruvarur, Tiruchirapalli, Karur, Perambalur, Tirunelveli, Thoothukudi, Salem and Namakkal Districts)"
        },
        {
          id: "191",
          text:
            "Koravars (Kancheepuram, Tiruvallur, Ramanathapuram, Sivaganga, Virudhunagar, Pudukkottai, Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur, Tirunelveli, Thoothukudi, Chennai, Madurai, Theni, Dindigul and The Nilgiris Districts)"
        },
        {
          id: "192",
          text:
            "Kalinji Dabikoravars (Thanjavur, Nagapattinam, Tiruvarur and Pudukkottai Districts)"
        },
        {
          id: "193",
          text:
            "Kootappal Kallars (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "194",
          text:
            "Kala Koravars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        { id: "195", text: "Kalavathila Boyas" },
        {
          id: "196",
          text:
            "Kepmaris (Kancheepuram, Tiruvallur,    Pudukkottai, Tiruchirapalli, Karur and Perambalur Districts)"
        },
        {
          id: "197",
          text:
            "Maravars (Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Ramanathapuram, Sivaganga, Virudhunagar, Tirunelveli and Thoothukudi Districts)"
        },
        { id: "198", text: "Monda Koravars" },
        { id: "199", text: "Monda Golla (Salem and Namakkal Districts)" },
        {
          id: "200",
          text:
            "Mutlakampatti (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "201",
          text:
            "Nokkars (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "202",
          text: "Nellorepet Oddars (Vellore and Thiruvannamalai Districts)"
        },
        {
          id: "203",
          text:
            "Oddars (Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Madurai, Theni and Dindigul Districts)"
        },
        {
          id: "204",
          text:
            "Pedda Boyas (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "205",
          text: "Ponnai Koravars (Vellore and Thiruvannamalai Districts)"
        },
        {
          id: "206",
          text:
            "Piramalai Kallars (Sivagangai, Virudhunagar, Ramanathapuram, Madurai, Theni, Dindigul, Pudukkottai, Thanjavur, Nagapattinam and Thiruvarur Districts)"
        },
        {
          id: "207",
          text:
            "Periya Suriyur Kallars (Tiruchirapalli, Karur, Perambalur, and Pudukkottai Districts)"
        },
        {
          id: "208",
          text:
            "Padayachi (Vellayan Kuppam in Cuddalore District and Tennore in Tiruchirapalli District)"
        },
        {
          id: "209",
          text:
            "Punnan Vettuva Gounder (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "210",
          text:
            "Servai (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "211",
          text:
            "Salem Melnad Koravars (Madurai, Theni, Dindigul, Coimbatore, Erode, Pudukkottai, Tiruchirapalli, Karur, Perambalur, Salem, Namakkal, Vellore and Thiruvannamalai Districts)"
        },
        { id: "212", text: "Salem Uppu Koravars (Salem and Namakkal Dist.)" },
        {
          id: "213",
          text:
            "Sakkaraithamadai Koravars (Vellore and Thiruvannamalai districts)"
        },
        { id: "214", text: "Saranga Palli Koravars" },
        { id: "215", text: "Sooramari Oddars (Salem and Namakkal Districts)" },
        {
          id: "216",
          text:
            "Sembanad Maravars (Sivaganga, Virudhunagar and Ramanathapuram Districts)"
        },
        { id: "217", text: "Thalli Koravars (Salem and Namakkal Districts)" },
        {
          id: "218",
          text:
            "Telungapatti Chettis (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "219",
          text:
            "Thottia Naickers (Sivaganga, Virudhunagar, Ramanathapuram, Kancheepuram, Tiruvallur, Thanjavur, Nagapattinam, Thiruvarur, Tiruchirapalli, Karur, Perambalur. Pudukkottai, Tirunelveli, Thoothukudi, Salem, Namakkal, Vellore,    Thiruvannamalai, Coimbatore & Erode Districts)"
        },
        {
          id: "220",
          text:
            "Thogamalai Koravars or Kepmaris (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "221",
          text:
            "Uppukoravars or Settipalli Koravars (Thanjavur, Nagapattinam, Thiruvarur, Pudukkottai, Madurai, Theni, Dindigul, Vellore and Thiruvannamalai Dist.)"
        },
        {
          id: "222",
          text:
            "Urali Gounders (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        { id: "223", text: "Wayalpad or Nawalpeta Korachas" },
        {
          id: "224",
          text:
            "Vaduvarpatti Koravars (Madurai, Theni, Dindigul, Ramanathapuram, Sivaganga, Virudhunagar, Tirunelveli, Thoothukudi, Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "225",
          text:
            "Valayars (Madurai, Theni, Dindigul, Tiruchirapalli, Karur, Perambalur, Pudukkottai, Erode and Coimbatore Districts)"
        },
        {
          id: "226",
          text:
            "Vettaikarar (Thanjavur, Nagapattinam, Thiruvarur and Pudukkottai Districts)"
        },
        { id: "227", text: "Vetta koravars (Salem and Namakkal District)" },
        {
          id: "228",
          text:
            "Varaganeri Koravars (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        },
        {
          id: "229",
          text:
            "Vettuva Gounder (Tiruchirapalli, Karur, Perambalur and Pudukkottai Districts)"
        }
      ],
      SC: [
        { id: "", text: "Please Select" },
        { id: "37", text: "Adi Dravida" },
        { id: "38", text: "Adi Karnataka" },
        { id: "39", text: "Ajila" },
        {
          id: "40",
          text:
            "Ayyanavar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "41", text: "Baira" },
        { id: "42", text: "Bakuda" },
        { id: "43", text: "Bandi" },
        { id: "44", text: "Bellara" },
        {
          id: "45",
          text:
            "Bharatar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "46", text: "Chalavadi" },
        { id: "47", text: "Chamar, Muchi" },
        { id: "48", text: "Chandala" },
        { id: "49", text: "Cheruman" },
        { id: "50", text: "Devendrakulathan" },
        { id: "51", text: "Dom, Dombara, Paidi, Pano" },
        { id: "52", text: "Domban" },
        { id: "53", text: "Godagali" },
        { id: "54", text: "Godda" },
        { id: "55", text: "Gosargi" },
        { id: "56", text: "Holeya" },
        { id: "57", text: "Jaggali" },
        { id: "58", text: "Jambuvulu" },
        { id: "59", text: "Kadaiyan" },
        {
          id: "60",
          text:
            "Kakkalan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "61", text: "Kalladi" },
        { id: "62", text: "Kanakkan, Padanna (in the Nilgiris District)" },
        { id: "63", text: "Karimpalan" },
        {
          id: "64",
          text:
            "Kavara (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "65", text: "Koliyan" },
        { id: "66", text: "Koosa" },
        {
          id: "67",
          text:
            "Kootan, Koodan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "68", text: "Kudumban" },
        { id: "69", text: "Kuravan, Sidhanar" },
        { id: "70", text: "Maila" },
        { id: "71", text: "Mala" },
        {
          id: "72",
          text:
            "Mannan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "73", text: "Mavilan" },
        { id: "74", text: "Moger" },
        { id: "75", text: "Mundala" },
        { id: "76", text: "Nalakeyava" },
        { id: "77", text: "Nayadi" },
        {
          id: "78",
          text:
            "Padannan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "79", text: "Pallan" },
        { id: "80", text: "Pulluvan" },
        { id: "81", text: "Pambada" },
        {
          id: "82",
          text:
            "Panan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "83", text: "Panchama" },
        { id: "84", text: "Pannadi" },
        { id: "85", text: "Panniandi" },
        { id: "86", text: "Paraiyan, Parayan, Sambavar" },
        {
          id: "87",
          text:
            "Paravan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "88",
          text:
            "Pathiyan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "89", text: "Pulayan, Cheramar" },
        { id: "90", text: "Puthirai Vannan" },
        { id: "91", text: "Raneyar" },
        { id: "92", text: "Samagara" },
        { id: "93", text: "Samban" },
        { id: "94", text: "Sapari" },
        { id: "95", text: "Semman" },
        {
          id: "96",
          text:
            "Thandan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "97", text: "Tiruvalluvar" },
        { id: "98", text: "Vallon" },
        { id: "99", text: "Valluvan" },
        {
          id: "100",
          text:
            "Vannan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "101", text: "Vathiriyan" },
        { id: "102", text: "Velan" },
        { id: "103", text: "Venganur Adi-Dravidar (in Vellore Dist.)" },
        { id: "104", text: "Veppur Parayan (in Cuddalore District)" },
        {
          id: "105",
          text:
            "Vetan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "106", text: "Vettiyan" },
        {
          id: "107",
          text:
            "Vettuvan (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        }
      ],
      SCA: [
        { id: "", text: "Please Select" },
        { id: "Adi Andhra", text: "Adi Andhra" },
        { id: "Arunthathiyar", text: "Arunthathiyar" },
        { id: "Chakkiliyan", text: "Chakkiliyan" },
        { id: "Madari", text: "Madari" },
        { id: "Madiga", text: "Madiga" },
        { id: "Pagadai", text: "Pagadai" },
        { id: "Thoti", text: "Thoti" }
      ],
      ST: [
        { id: "", text: "Please Select" },
        { id: "1", text: "Adiyan" },
        { id: "2", text: "Aranadan" },
        { id: "3", text: "Eravallan" },
        { id: "4", text: "Irular" },
        { id: "5", text: "Kadar" },
        {
          id: "6",
          text:
            "Kammara (excluding Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        {
          id: "7",
          text:
            "Kanikaran, Kanikkar (in Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "8", text: "Kaniyan, Kanyan" },
        { id: "9", text: "Kattunayakan" },
        { id: "10", text: "Kochu Velan" },
        { id: "11", text: "Konda Kapus" },
        { id: "12", text: "Kondareddis" },
        { id: "13", text: "Koraga" },
        {
          id: "14",
          text:
            "Kota (excluding Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "15", text: "Kudiya, Melakudi" },
        { id: "16", text: "Kurichchan" },
        { id: "17", text: "Kurumbas (in the Nilgiris District)" },
        { id: "18", text: "Kurumans" },
        { id: "19", text: "Maha Malasar" },
        { id: "20", text: "Malai Arayan" },
        { id: "21", text: "Malai Pandaram" },
        { id: "22", text: "Malai Vedan" },
        { id: "23", text: "Malakkuravan" },
        { id: "24", text: "Malasar" },
        {
          id: "25",
          text:
            "Malayali (in Dharmapuri, North Arcot, Pudukkottai, Salem, South Arcot and Tiruchirapalli Districts)"
        },
        { id: "26", text: "Malayakandi" },
        { id: "27", text: "Mannan" },
        { id: "28", text: "Mudugar, Muduvan" },
        { id: "29", text: "Muthuvan" },
        { id: "30", text: "Pallayan" },
        { id: "31", text: "Palliyan" },
        { id: "32", text: "Palliyar" },
        { id: "33", text: "Paniyan" },
        { id: "34", text: "Sholaga" },
        {
          id: "35",
          text:
            "Toda (excluding Kanyakumari District and Shenkottah Taluk of Tirunelveli District)"
        },
        { id: "36", text: "Uraly" }
      ]
    };

    //Get Community Names
    const { community_names } = this.state;

    let community_names_List =
      community_names.length > 0 &&
      community_names.map((community_name, community_index) => {
        return (
          <option key={community_index} value={community_name.id}>
            {community_name.name}
          </option>
        );
      }, this);

    //Get Caste Names
    const { selected_community_name } = this.state;
    const caste_names = caste_list[selected_community_name];

    return (
      <div className="step step3">
        <Card>
          <CardHeader>Community Details</CardHeader>
          <CardBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="nameOfCommunity">
                    <span className="asterix_color">*</span>Name Of Community
                  </label>
                  <div
                    className={notValidClasses.nameOfCommunityCls}
                    className="error_color"
                  >
                    <select
                      ref="nameOfCommunity"
                      autoComplete="off"
                      type="select"
                      onChange={this.listen_to_community_name_change}
                      className="form-control"
                      required
                      defaultValue={this.state.nameOfCommunity}
                    >
                      {community_names_List}
                    </select>
                    <div className={notValidClasses.nameOfCommunityValGrpCls}>
                      {this.state.nameOfCommunityValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="nameOfCaste">
                    <span className="asterix_color">*</span>Name Of Caste
                  </label>
                  <div
                    className={notValidClasses.nameOfCasteCls}
                    className="error_color"
                  >
                    <select
                      ref="nameOfCaste"
                      autoComplete="off"
                      type="select"
                      onChange={this.listen_to_caste_name_change}
                      className="form-control"
                      required
                      defaultValue={this.state.nameOfCaste}
                    >
                      {caste_names &&
                        caste_names.map(caste_name => (
                          <option key={caste_name.id}>{caste_name.text}</option>
                        ))}
                    </select>
                    <div className={notValidClasses.nameOfCasteValGrpCls}>
                      {this.state.nameOfCasteValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <label for="casteCode">
                    <span className="asterix_color">*</span>Caste code
                  </label>
                  <div
                    className={notValidClasses.casteCodeCls}
                    className="error_color"
                  >
                    <input
                      ref="casteCode"
                      autoComplete="off"
                      type="text"
                      readOnly
                      className="form-control"
                      required
                      defaultValue={this.state.casteCode}
                    />
                    <div className={notValidClasses.casteCodeValGrpCls}>
                      {this.state.casteCodeValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="sriLankanRefugee">
                    <span className="asterix_color">*</span>SriLankan Tamil
                    Refugee
                  </label>
                  <div
                    className={notValidClasses.sriLankanRefugeeCls}
                    className="error_color"
                  >
                    <select
                      ref="sriLankanRefugee"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.sriLankanRefugee}
                    >
                      <option value="">* Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div className={notValidClasses.sriLankanRefugeeValGrpCls}>
                      {this.state.sriLankanRefugeeValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <label for="differentlyAbled">
                    <span className="asterix_color">*</span>Differently Abled
                  </label>
                  <div
                    className={notValidClasses.sriLankanRefugeeCls}
                    className="error_color"
                  >
                    <select
                      ref="differentlyAbled"
                      autoComplete="off"
                      type="select"
                      className="form-control"
                      required
                      defaultValue={this.state.differentlyAbled}
                    >
                      <option value="">* Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div className={notValidClasses.differentlyAbledValGrpCls}>
                      {this.state.differentlyAbledValMsg}
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}
