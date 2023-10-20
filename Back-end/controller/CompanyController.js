const express = require('express');
app = express();
const qr = require('../query/CompanyQuery');
class CompanyController{
    createCompany(req,res){
        let cp = req.body;
        qr.createCompany(cp).then(result=>{
            res.status(200).send({result})
        });
    }
    updateCompany(req,res){
        let cp = req.body;
        qr.updateCompany(cp).then(result=>{
            res.status(200).send({result})
        });
    }
}
module.exports= new CompanyController;