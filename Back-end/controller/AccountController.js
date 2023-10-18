const express = require('express');
const account = require('../routes/Account');
var request = require('request');
const body = require('body-parser');
const qr = require('../query/AccountQuery');
app = express();

class AccountController{
    login(req,res){
        let username = req.params.Username;
        let password = req.params.Password;
        qr.login(username,password).then(result=>{
            res.status(200).send({result})
        });
    }
    createAccount(req,res){
        let acc = req.body;
        console.log(acc);
        qr.createAccount(acc).then(result=>{
            res.status(200).send({result})
        }); 
    }
}
module.exports= new AccountController;