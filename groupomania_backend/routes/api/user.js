const express = require('express');
const router = express.Router();
const db = require('../../database');
const userCtrl = require('../../controllers/userControl');

/// ATTENTION Not to put AUTH on signup and login
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
///

router.get('/', userCtrl.getAllUsers);
router.post('/', userCtrl.createUser);
router.put('/:id', userCtrl.modifyUser);
router.delete('/:id', userCtrl.deleteUser);
router.get('/:id', userCtrl.getOneUser);

module.exports = router;
