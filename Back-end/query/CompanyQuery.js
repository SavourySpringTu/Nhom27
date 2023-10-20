const config = require('../connectSQL');
const sql = require('mssql');

async function createCompany(cp){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('')
        .query('select * from job');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}

module.exports = {
    createCompany:createCompany
}