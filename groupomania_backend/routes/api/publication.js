const express = require('express');
const router = express.Router();
const db = require('../../database');
const auth = require('../../middleware/auth');
const multer = require('../../middleware/multer-config');
const postCtrl = require('../../controllers/postControl');

router.get('/', auth, function (req, res) {
	db.select()
		.from('publication')
		.orderBy('id')
		.then((data) => res.status(200).json(data))
		.catch((error) => res.status(400).json({ error }));
});

router.post('/', auth, multer, postCtrl.createPost);

/*
router.post('/', auth, multer, function (req, res) {
	//console.log(req.file);
	console.log(req.body);
	db.insert(req.body)
		.into('publication')
		.then(() => res.status(201).json({ message: 'enregistrée !' }))
		.catch((error) => res.status(400).json({ error }));
});
*/
router.put('/:id', auth, function (req, res) {
	db('publication')
		.where({ id: req.params.id })
		.update(req.body)
		.then(() => res.status(200).json({ message: 'modifiée !' }))
		.catch((error) => res.status(400).json({ error }));
});

router.delete('/:id', auth, function (req, res) {
	db('publication')
		.where({ id: req.params.id })
		.del()
		.then(() => res.status(200).json({ message: 'Supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
});

router.get('/:id', auth, function (req, res) {
	db('publication')
		.where({ id: req.params.id })
		.select()
		.then((data) => res.status(200).json(data))
		.catch((error) => res.status(404).json({ error }));
});

module.exports = router;
