const config = require('../connectSQL');
const sql = require('mssql');

async function searchPostbyJob(job){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('job',sql.Int,job)
        .query('SELECT * FROM Post WHERE Id_Job=@job');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}
module.exports = {
    searchPostbyJob:searchPostbyJob
}