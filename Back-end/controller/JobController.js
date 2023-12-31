const express = require('express');
app = express();
const qr = require('../query/JobQuery');
class JobController{
    listJob(req,res){
        qr.getListJob().then(result=>{
            res.status(200).send({result})
        });
    }
    getJob(req,res){
        let id = req.params.Id;
        qr.getJobbyId(id).then(result=>{
            res.status(200).send({result})
        });
    }
    listJobA(req,res){
        qr.getListJob().then(result=>{
            res.status(200).send({result})
        })
    }
}
module.exports= new JobController;