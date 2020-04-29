const aws = require( 'aws-sdk' );
const multerS3 = require( 'multer-s3' );
const multer = require('multer');
const path = require( 'path' );
const crypto = require('crypto')

const AWS_KEY = require('../config/keys')
/**
 * PROFILE IMAGE STORING STARTS
 */
const s3 = new aws.S3({
	accessKeyId: AWS_KEY.ACCESS_KEY_ID,
  	secretAccessKey: AWS_KEY.SECRET_ACCESS_KEY,
  	region: AWS_KEY.REGION 
});

/**
 * Single Upload
 */
const profileImgUpload = multer({	
	storage: multerS3({
		s3: s3,
		bucket: 'uploadedfiles21',
		acl: 'public-read',
		// key: function (req, file, cb) {
		// 	cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
		// }
		key: function (req, file, cb) {
			cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + crypto.randomBytes(64) )
		}
	}),
	limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
	fileFilter: function( req, file, cb ){
		checkFileType( file, cb );
	}
}).single('profileImage');

function checkFileType( file, cb ){
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
	// Check mime
	const mimetype = filetypes.test( file.mimetype );
	if( mimetype && extname ){
		return cb( null, true );
	} else {
		cb( 'Error: Images Only!' );
	}
}

module.exports = profileImgUpload;
