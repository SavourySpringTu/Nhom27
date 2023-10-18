const config = require('../connectSQL');
const sql = require('mssql');

async function getListJob(){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .query('select * from job');
        var list = [];
        list.push(qr.recordset);
        return list;
    }
    catch(error)
    {
        return false;
    }
}
async function getJobbyId(id){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('id',sql.Int,id)
        .query('select * from job where Id= @id');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}
async function getListJobA(){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .query("SELECT * FROM Job WHERE Status='false'");
        var list = [];
        list.push(qr.recordset);
        return list;
    }
    catch(error)
    {
        return false;
    }
}
module.exports = {
    getListJob:getListJob,
    getListJobA:getListJobA,
    getJobbyId:getJobbyId
}