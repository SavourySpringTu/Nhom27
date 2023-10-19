const express = require('express');
const PostController = require('../controller/PostController');
const route = express.Router();

route.get('/searchpost/:Job',PostController.searchPostbyJob);
route.get('/listpost',PostController.listPost);
route.post('/createpost',PostController.createPost);

module.exports = route;