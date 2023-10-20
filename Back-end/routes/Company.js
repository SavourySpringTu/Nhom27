const express = require('express');
const CompanyController = require('../controller/CompanyController');
const route = express.Router();

route.post('/createcompany',CompanyController.createCompany);

module.exports = route;