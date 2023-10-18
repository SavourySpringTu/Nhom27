const config = require('../connectSQL');
const sql = require('mssql');

async function getCvApply(post){
    try{
        console.log(post);
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('post',sql.Int,post)
        .query('SELECT * FROM Application WHERE Id_Post=@post');
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
    getCvApply:getCvApply
}