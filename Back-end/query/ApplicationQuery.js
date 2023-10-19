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
async function applyCV(cv){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('link',sql.NChar,cv.Link)
        .input('checked',sql.Bit,cv.Checked)
        .input('post',sql.Int,cv.Id_Post)
        .input('candidate',sql.Int,cv.Id_Candidate)
        .query('INSERT INTO Appication(Link,Checked,Id_Post,Id_Candidate) VALUES(@link,@checked,@post,@candidate)');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}
module.exports = {
    getCvApply:getCvApply,
    applyCV:applyCV
}