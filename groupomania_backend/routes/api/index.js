const express = require('express');
const router = express.Router();

const userRoute = require('./user');
const publicationRoute = require('./publication');
const commentaireRoute = require('./commentaire');

router.use('/user', userRoute);
router.use('/publication', publicationRoute);
router.use('/commentaire', commentaireRoute);

module.exports = router;
