const multer = require('multer');

const MIME_TYPES = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
};

const storage = multer.diskStorage({
	destination: __dirname + '/media/',

	filename: (req, file, callback) => {
		const name = file.originalname.split(' ').join('_'); //<-to avoid white space//
		const extension = MIME_TYPES[file.mimetype]; //<- imagefile extension using MIME Types
		callback(null, name + Date.now() + '.' + extension);
	},

	//filename(req, file, cb) {
	//	console.log(file);
	//	cb(null, `${file.originalname}-${new Date()}`);
});

module.exports = multer({ storage: storage }).single('file');
