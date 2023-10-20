const express = require('express');
const ApplicationController = require('../controllers/AplicationController');
const route = express.Router();

route.get('/cvapply/:Post',ApplicationController.getCvApply);

module.exports = route;