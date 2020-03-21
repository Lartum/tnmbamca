import React, { Component } from 'react';
import axios from 'axios';
import { Button} from 'reactstrap';
import { Link } from "react-router-dom";

export default class Step7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedToCloud: props.getStore().savedToCloud
    };
  }

  componentDidMount() {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = axios.post("/api/application", this.props.getStore(), config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

  }

  componentWillUnmount() {}

  // not required as this component has no forms or user entry
  // isValidated() {}

  render() {
    return (
      <div className="step step7">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                {
                  (this.state.savedToCloud)
                  ?
                    <div>
                      <h1>Thanks!</h1>
                      <h2>Data was successfully saved to cloud...</h2>
                   
                    </div>
                  :
                    <h1>You have updated data, go <a onClick={() => {this.props.jumpToStep(4)}}>back</a> and Save again!</h1>
                }
              </label>
              </div>
          
          </form>
        </div>
        <Link to='/pdf'><Button type="Submit" className="">View PDF</Button></Link>  
      </div>
      
    )
  }
}
