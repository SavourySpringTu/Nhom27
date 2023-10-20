const config = require('../connectSQL');
const sql = require('mssql');

async function personalInformation(id){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('id',sql.Int,id)
        .query('SELECT * FROM [User] INNER JOIN Candidate ON [User].Id = Candidate.Id_user WHERE [User].Id=@id');
        var list = [];
        list.push(qr.recordset);
        return list;
    }
    catch(error)
    {
        return false;
    }
}
async function createUser(user){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        console.log('INSERT INTO [User](Name,Address,Image,Status,Id_Role,Id_Account) VALUES(user.Name,user.Address,user.Image,user.Status,user.Id_Role,user.Id_Account')
        .input('name',sql.NVarChar,user.Name)
        .input('address',sql.NVarChar,user.Address)
        .input('image',sql.NChar,user.Image)
        .input('status',sql.Bit,user.Status)
        .input('role',sql.Int,user.Id_Role)
        .input('account',sql.NChar,user.Id_Acount)
        .query('INSERT INTO [User](Name,Address,Image,Status,Id_Role,Id_Account) VALUES(@name,@address,@image,@status,@role,@account)');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}
module.exports = {
    personalInformation:personalInformation,
    createUser:createUser
}