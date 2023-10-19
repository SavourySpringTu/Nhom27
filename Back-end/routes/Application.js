const express = require('express');
const ApplicationController = require('../controller/ApplicationController');
const route = express.Router();

route.get('/cvinpost/:Post',ApplicationController.getCvApply);
route.post('/applycv',ApplicationController.getCvApply);

module.exports = route;