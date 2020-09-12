const nodeMailer = require('nodemailer');
async function sendMail(recMailId, response, otpNo){
    let transport = nodeMailer.createTransport({
        service:'gmail',
        auth:{
            user:'anam.s.21099@gmail.com',
            pass:'Anam@2109'
        }
    });
    const attachmentArray = [
        {
            path:'/Users/amit/Documents/rocket.png',
            filename:'myimage.png'
        }
    ];

    const mailOptions = {
        attachments:attachmentArray,
        from :'anam.s.21099@gmail.com',
        to:recMailId,
        subject:'Hello U register SuccessFully 🍕 ',
        text:'Hello User',
        html:`<a href='http://localhost:1234/verify/${otpNo}'>Verification Link</a>`
    };
    try{
    await transport.sendMail(mailOptions);
    response.json({message:'U Register SuccessFully , Mail Send It '+recMailId})
    }
    catch(e){
        response.json({message:'Error in Mail Send '+e});
    }
}
module.exports = sendMail;