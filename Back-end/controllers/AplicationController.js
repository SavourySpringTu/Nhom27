const express = require('express');
const qr = require('../query/ApplicationQuery');
app = express();

class ApplicationController{
    getCvApply(req,res){
        let post = req.params.Post;
        qr.getCvApply(post).then(result=>{
            res.status(200).send(result)
        });
    }
}
module.exports= new ApplicationController;