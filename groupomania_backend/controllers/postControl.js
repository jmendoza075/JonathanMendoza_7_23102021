//Include the File System module in the application
const fs = require('fs');
const db = require('../database');

// POST //
exports.createPost = (req, res) => {
	//console.log(req.file);
	//console.log(req.body);
	const postObject = req.body;
	//console.log(postObject);
	const dbpost = {
		...postObject,
		imageUrl: `${req.protocol}://${req.get('host')}/middleware/media/${
			req.file.filename
		}`,
	};

	db.insert(dbpost)
		.into('publication')
		.then(() => res.status(201).json({ message: 'enregistrée !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.modifyPost = (req, res) => {
	console.log(req.file);
	const postObject = req.body;
	const modObject = req.file
		? {
				...postObject,
				imageUrl: `${req.protocol}://${req.get('host')}/middleware/media/${
					req.file.filename
				}`,
		  }
		: { ...req.body };

	db('publication')
		.where({ id: req.params.id })
		.update(modObject)
		.then(() => res.status(200).json({ message: 'modifiée !' }))
		.catch((error) => res.status(400).json({ error }));
};
