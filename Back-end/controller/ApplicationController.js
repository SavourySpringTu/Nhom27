const express = require('express');
const account = require('../routes/Application');
var request = require('request');
const body = require('body-parser');
const qr = require('../query/ApplicationQuery');
app = express();

class ApplicationController{
    getCvApply(req,res){
        let post = req.params.Post;
        qr.getCvApply(post).then(result=>{
            res.status(200).send({result})
        });
    }
    applyCV(req,res){
        let cv = req.body;
        qr.getCvApply(cv).then(result=>{
            res.status(200).send({result})
        });
    }
    sendMailForgetPassword(req,res){
        let mail = req.params.mail;
        qr.sendMailForgetPassword(mail).then(result=>{
            res.status(200).send({result})
        });
    }
}
module.exports= new ApplicationController;