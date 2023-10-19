const config = require('../connectSQL');
const sql = require('mssql');

async function searchPostbyJob(job){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('job',sql.Int,job)
        .query('SELECT Post.Id,Post.Address,Post.Number,Post.Benefits,Post.Experience,Post.JobRequire,Post.Qualification,Post.Salary,Post.DateTerm,Post.Id_Company,Post.Id_Job,Post.Status,Job.Name FROM Post INNER JOIN Job ON Post.Id_Job = Job.Id WHERE Post.Id_Job = @job');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}
async function createPost(post){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('address',sql.NVarChar,post.Address)
        .input('number',sql.Int,post.Number)
        .input('jobrequire',sql.NVarChar,post.JobRequire)
        .input('benefits',sql.NVarChar,post.Benefits)
        .input('experience',sql.NVarChar,post.Experience)
        .input('qualification',sql.NVarChar,post.Qualification)
        .input('salary',sql.NVarChar,post.Salary)
        .input('dateterm',sql.Date,post.DateTerm)
        .input('status',sql.Int,post.Status)
        .input('job',sql.Int,post.Id_Job)
        .input('company',sql.Int,post.Id_Company)
        .query('INSERT INTO Post(Address,Number,JobRequire,Benefits,Experience,Qualification,Salary,DateTerm,Status,Id_Job,Id_Company) VALUES (@address,@number,@jobrequire,@benefits,@experience,@qualification,@salary,@dateterm,@status,@job,@company)');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}
async function listPost(job){
    try{
        let pool = await sql.connect(config);
        let qr =  await pool.request()
        .input('job',sql.Int,job)
        .query('SELECT Post.Id,Post.Address,Post.Number,Post.Benefits,Post.Experience,Post.JobRequire,Post.Qualification,Post.Salary,Post.DateTerm,Post.Id_Company,Post.Id_Job,Post.Status,Job.Name FROM Post INNER JOIN Job ON Post.Id_Job = Job.Id WHERE GETDATE()<Post.DateTerm AND Post.Status = 1');
        return qr.recordset;
    }
    catch(error)
    {
        return false;
    }
}
module.exports = {
    searchPostbyJob:searchPostbyJob,
    createPost:createPost,
    listPost:listPost
}