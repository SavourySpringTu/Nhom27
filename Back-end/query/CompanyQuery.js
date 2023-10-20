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
async function updateCompany(cp){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('username',sql.NChar,cp.Id)
        .input('email'.sql.NChar,cp.Email)
        .query('UPDATE Account SET Email=@email WHERE Id=@username');
        qr =  await pool.request()
        .input('username',sql.NChar,cp.Id)
        .input('address',sql.NVarChar,cp.Address)
        .query('UPDATE User SET Address=@address WHERE Id_Acount=(SELECT Id FROM Account WHERE Id=@username)');
        qr =  await pool.request()
        .input('username',sql.NChar,cp.Id)
        .input('description',sql.NVarChar,cp.Description)
        .input('contact',sql.NVarChar,cp.Contact)
        .query('UPDATE Company SET Description=@description, Contact=@contact WHERE Id_User=(SELECT Id FROM User WHERE Id_Account=(SELECT Id FROM Account WHERE Id=@username))');
        return cp.username;
    }
    catch(error)
    {
        return false;
    }
}

module.exports = {
    createCompany:createCompany,
    updateCompany:updateCompany
}