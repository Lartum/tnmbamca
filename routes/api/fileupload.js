const express = require('express');
const router = express.Router();
const passport = require('passport');
const cors = require('cors');

const fileUpload = require('../../services/fileupload');
// Load User Model
const User = require('../../models/User');

const File = require('../../models/Files');


router.post( '/plustwomarksheet', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({applicationno:req.user.applicationno})
            .then(files =>{
				console.log(file);	
              if(files){
                  files.plustwoMarksheet = req.file.location,
                  files.plustwoMarksheet.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
                
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          plustwoMarksheet: fileLocation
        })
        file.plustwoMarksheet.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/allsemmarksheet', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.allsemMarksheet = req.file.location,
                  files.allsemMarksheet.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          allsemMarksheet: fileLocation,
          
        })
        file.allsemMarksheet.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/degreecertificate', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.degreeCertificate = req.file.location,
                  files.degreeCertificate.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          degreeCertificate: fileLocation
        })

        file.degreeCertificate.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/transfercertificate', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.transferCertificate = req.file.location,
                  files.transferCertificate.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          transferCertificate: fileLocation
        })

        file.transferCertificate.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/permanentcommunitycard', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.permamentcommunitycard = req.file.location,
                  files.permamentcommunitycard.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          permamentcommunitycard: fileLocation
        })
        file.permamentcommunitycard.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/tancethallticket', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.tancethallticket = req.file.location,
                  files.tancethallticket.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          tancethallticket: fileLocation
        })
        file.tancethallticket.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/tancetmarksheet', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.tancetmarksheet = req.file.location,
                  files.tancetmarksheet.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          tancetmarksheet: fileLocation
        })
        file.tancetmarksheet.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/nativitycertificate', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.nativitycertificate = req.file.location,
                  files.nativitycertificate.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          nativitycertificate: fileLocation
        })
        file.nativitycertificate.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/districtmedicalboard', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.districtmedicalboard = req.file.location,
                  files.districtmedicalboard.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          districtmedicalboard: fileLocation
        })
        file.districtmedicalboard.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/srilankantamilrefugee', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.srilankantamilrefugee = req.file.location,
                  files.srilankantamilrefugee.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          srilankantamilrefugee: fileLocation
        })
        file.srilankantamilrefugee.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

router.post( '/demanddraft', passport.authenticate('jwt', 
{ session: false }), async (req, res) => {
	fileUpload( req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		console.log( 'error', error );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			// If File not found
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
        
        File.findOne({application:req.user.applicationno})
            .then(files =>{

              if(files){
                  files.demanddraft = req.file.location,
                  files.demanddraft.uploaded = true
                  files.save();
              }
              else{

				const fileLocation = req.file.location;
        
        // Save the file name into database into profile model
        const file = new File({
          userid: req.user._id,
          applicationno: req.user.applicationno,
          demanddraft: fileLocation
        })
        file.demanddraft.uploaded = true;
        file.save();
        
				res.json( {
					location: fileLocation
				} );
              }
            })      
      
			}
		}
	});
});

module.exports = router