const express = require('express');
const PostController = require('../controller/PostController');
const route = express.Router();

route.get('/listjob',PostController.searchPostbyJob);

module.exports = route;
