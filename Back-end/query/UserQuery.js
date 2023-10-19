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
module.exports = {
    personalInformation:personalInformation
}