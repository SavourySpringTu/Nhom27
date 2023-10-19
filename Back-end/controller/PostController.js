const express = require('express');
const body = require('body-parser');
const qr = require('../query/PostQuery');
app = express();

class PostController{
    searchPostbyJob(req,res){
        let job = req.params.Job;
        qr.searchPostbyJob(job).then(result=>{
            res.status(200).send({result})
        });
    }
    createPost(req,res){
        let post = req.body;
        qr.createPost(post).then(result=>{
            res.status(200).send({result})
        });
    }
    listPost(req,res){
        qr.listPost().then(result=>{
            res.status(200).send({result})
        });
    }
}
module.exports= new PostController;