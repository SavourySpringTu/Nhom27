const express = require('express');
const JobController = require('../controller/JobController');
const route = express.Router();

route.get('/listjob',JobController.listJob);
route.get('/listjoba',JobController.listJobA);
route.get('/getjob/:Id',JobController.getJob);

module.exports = route;