const config = require('../connectSQL');
const sql = require('mssql');
async function login(username,password){
    try{
        console.log(username);
        console.log(password);
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('username',sql.NChar,username)
        .input('password',sql.NChar,password)
        .query('select * from account where Id=@username AND Password=@password');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}
async function createAccount(acc){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('id',sql.NChar,acc.Id)
        .input('password',sql.NChar,acc.Password)
        .input('email',sql.NChar,acc.Email)
        .query('INSERT INTO account(Id,Password,Email) VALUES (@id,@password,@email)');
        return acc.Id;
    }
    catch(error)
    {
        return false;
    }
}
module.exports = {
    login:login,
    createAccount:createAccount
}