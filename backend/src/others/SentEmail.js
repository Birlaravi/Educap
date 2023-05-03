//auth:{
    //user:'nb988684@gmail.com'
//}

const nodemailer = require("nodemailer");
function SendmailFun(ToEmail ,Subject ,body){
    const transporter=nodemailer.createTransport({
        service:'gmail',
        port:456,
        auth:{
           user :'2021ca4an@mitsgwl.ac.in',
           pass :'rpisaxbrpsiwpiqk'
        },
        host:'smtp.gmail.com'
    });
    let mailOptions={
        from:'2021ca04an@mitsgwl.ac.in',
        to: `${ToEmail}`,
        subject:`${Subject}`,
        text:`${body}`,
    };
    transporter.sendMail(mailOptions,function(error,msg){
        if(error) console.log("error..."+error);
        else console.log("message..."+msg.response);
    });
} 
module.exports = SendmailFun ;