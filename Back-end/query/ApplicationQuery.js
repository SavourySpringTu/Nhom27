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
async function sendMailForgetPassword(inputmail){
    let pool = await sql.connect(config);
    let qr =  await pool.request()
    .input('mail',sql.NChar,inputmail)
    .query('SELECT Password FROM Account WHERE Email =@mail')
    var password= qr.recordset.Password;
    try{
        var nodemailer = require('nodemailer');

        const option = {
            service: 'gmail',
            auth: {
                user: 'tuxuanbui1111@gmail.com', // email hoặc username
                pass: 'gmkm dquj jtum tacy' // password
            }
        };
        var transporter = nodemailer.createTransport(option);
        
        transporter.verify(function(error, success) {
            // Nếu có lỗi.
            if (error) {
                console.log(error);
            } else { //Nếu thành công.
                var x = Math.floor(Math.random() * 100);
                console.log('Kết nối thành công!');
                var mail = {
                    from: 'tuxuanbui1111@gmail.com.com@gmail.com', // Địa chỉ email của người gửi
                    to: `${inputmail}`, // Địa chỉ email của người gửi
                    subject: 'Mã xác nhận reset mật khẩu', // Tiêu đề mail
                    text: `Mã bảo mật: ${x}`, // Nội dung mail dạng text
                };
                //Tiến hành gửi email
                transporter.sendMail(mail, function(error, info) {
                    if (error) { // nếu có lỗi
                        console.log(error);
                    } else { //nếu thành công
                        console.log('Email sent: ' + info.response);
                    }
                });
            }
        });       
    }
    catch(error)
    {
        return false;
    }
}
module.exports = {
    getCvApply:getCvApply,
    applyCV:applyCV,
    sendMailForgetPassword:sendMailForgetPassword
}