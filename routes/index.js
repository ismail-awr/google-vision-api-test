var express = require('express');
var router = express.Router();

// By default, the client will authenticate using the service account file
// specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
// the project specified by the GCLOUD_PROJECT environment variable. See
// https://googlecloudplatform.github.io/gcloud-node/#/docs/google-cloud/latest/guides/authentication
// var vision = require('@google-cloud/vision');

// Creates a client
// var client = new vision.ImageAnnotatorClient();


/* GET home page. */
router.get('/', function(req, res) {

	// // Make a call to the Vision API to detect the faces
 //  	const request = {image: {source: {filename: '/home/neosoft/Downloads/myImage.png'}}};

	// client
	// .faceDetection(request)
	// .then(results => {
	//   const faces = results[0].faceAnnotations;
	//   var numFaces = faces.length;
	//   console.log('Found ' + numFaces + (numFaces === 1 ? ' face' : ' faces'));
	//   callback(null, faces);
	// })
	// .catch(err => {
	//   console.error('ERROR:', err);
	//   callback(err);
	// });
		res.render('index', { title: 'Express' });
});

module.exports = router;
