const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const app = require('../app');

// Create user
router.post('/register', usersCtrl.createUser);

// login user
router.post('/login', usersCtrl.login);

// get profil
router.get('/:id/profil/', usersCtrl.showProfil);
router.get('/logout/', usersCtrl.logout);

module.exports = router;
