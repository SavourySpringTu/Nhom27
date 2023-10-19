const express = require('express');
const body = require('body-parser');
const qr = require('../query/UserQuery');
app = express();

class UserController{
    personalInformation(req,res){
        let id = req.params.Id;
        qr.personalInformation(id).then(result=>{
            res.status(200).send({result})
        });
    }
}
module.exports= new UserController;