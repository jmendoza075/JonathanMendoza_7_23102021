const express = require('express');
const router = express.Router();
const db = require('../../database');
const userCtrl = require('../../controllers/userControl');
const auth = require('../../middleware/auth');

/// ATTENTION Not to put AUTH on signup and login
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
///

router.get('/', auth, userCtrl.getAllUsers);
//router.post('/', userCtrl.createUser);
router.put('/:id', auth, userCtrl.modifyUser);
router.delete('/:id', auth, userCtrl.deleteUser);
router.get('/:id', auth, userCtrl.getOneUser);

module.exports = router;
