const express = require('express');
const UserController = require('../controller/UserController');
const route = express.Router();

route.get('/personalinformation/:Id',UserController.personalInformation);
route.post('/createuser',UserController.createUser);

module.exports = route;