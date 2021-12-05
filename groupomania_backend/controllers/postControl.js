//Include the File System module in the application
const fs = require('fs');

// POST //
exports.createPost = (req, res) => {
	if (!req.body) {
		console.log('No file upload');
	} else {
		console.log(req.body);
	}
};
