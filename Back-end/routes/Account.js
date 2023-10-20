const express = require('express');
const AccountController = require('../controller/AccountController');
const route = express.Router();

route.post('/createaccount',AccountController.createAccount);

module.exports = route;