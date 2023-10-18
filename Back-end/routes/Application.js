const express = require('express');
const ApplicationController = require('../controller/AplicationController');
const route = express.Router();

route.get('/cvapply/:Post',ApplicationController.getCvApply);

module.exports = route;