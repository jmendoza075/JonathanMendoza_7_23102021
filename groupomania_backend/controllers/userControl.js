const db = require('../database/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

//NEW USER Signup

exports.signup = async (req, res) => {
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	const user = {
		email: req.body.email,
		password: hashedPassword,
		nom: req.body.nom,
		prenom: req.body.prenom,
	};

	db.insert(user)
		.into('utilisateur')
		.then(() =>
			res.status(201).json({ user: user.email, message: 'user enregistré !' })
		)
		.catch((error) => res.status(400).json({ error }));
};

///lOGIN
exports.login = (req, res) => {
	db('utilisateur')
		.where({ email: req.body.email })
		.first()

		.then((user) => {
			if (!user) {
				return res.status(401).json({ error: 'Utilisateur non trouvé !' });
			}
			bcrypt
				.compare(req.body.password, user.password)
				.then((valid) => {
					if (!valid) {
						return res.status(401).json({ error: 'Mot de passe incorrect !' });
					}
					res.status(200).json({
						userId: user.id,
						// Sets the TOKEN //
						token: jwt.sign({ userId: user.id }, process.env.MY_TOKEN, {
							expiresIn: '24h',
						}),
					});
				})
				.catch((error) => res.status(500).json({ error }));
		})
		.catch((error) => res.status(500).json({ error }));
};

//User CRUD
exports.getAllUsers = (req, res) => {
	db.select()
		.from('utilisateur')
		.orderBy('id')
		.then((data) => res.status(200).json(data))
		.catch((error) => res.status(400).json({ error }));
};

exports.createUser = (req, res) => {
	db.insert(req.body)
		.into('utilisateur')
		.then(() => res.status(201).json({ message: 'enregistrée !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.modifyUser = (req, res) => {
	db('utilisateur')
		.where({ id: req.params.id })
		.update(req.body)
		.then(() => res.status(200).json({ message: 'modifiée !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.deleteUser = (req, res) => {
	db('utilisateur')
		.where({ id: req.params.id })
		.del()
		.then(() => res.status(200).json({ message: 'Supprimé !' }))
		.catch((error) => res.status(400).json({ error }));
};

exports.getOneUser = (req, res) => {
	db('utilisateur')
		.where({ id: req.params.id })
		.select()
		.then((data) => res.status(200).json(data))
		.catch((error) => res.status(404).json({ error }));
};
