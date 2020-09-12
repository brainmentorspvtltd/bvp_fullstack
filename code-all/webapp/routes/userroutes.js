const express = require('express');
const route = express.Router();
const User = require('../models/user');
const UserCRUD = require('../db/helpers/usercrud');
const UserModel = require('../db/schema/user');
const userOperations = require('../db/helpers/usercrud');
const otp = require('../utils/otp');
route.post('/add',(request, response)=>{
    response.send('UserRoute');
});
route.post('/changepwd',(request, response)=>{

});
// route.get('/se?a?rch',(req,res)=>{
//     res.send('Search Call');
// })
// route.get('/se+arch',(req,res)=>{
//     res.send('Search Call');
// })
route.get('/search*',(req,res)=>{
    res.send('Search Call');
})
route.all('/all',(req,res)=>{
    res.send('I am the All');
})
route.get('/verify/:otp',async (req,res)=>{
    const otp = req.params.otp;

    const userCrud = require('../db/helpers/usercrud');
    try{
    const result = await userCrud.alreadyVerified(otp);
    if(result){
        res.json({message:'Already Verified User'});
        return ;
    }
}
catch(e){
    console.log('Error in Already Verify OTP ',e);
}
    const promise = userCrud.verifyOTP(otp);

    promise.then(doc=>{
        const pr = userCrud.updateVerification(doc);
        pr.then(data=>{
            res.json({message:'Verified '+otp});
        }).catch(err=>{
            console.log('Error in OTP Verification Updation ',err);
            res.json({message:'Not Verified , Not updated '+otp})
        })


    }).catch(err=>{
        console.log('Error in OTP Verification ',err);
        res.json({message:'Not Verified '+otp});

    })
});
route.post('/reactregister',(request, response)=>{
    let emailid = request.body.userid;
    let password = request.body.pwd;

    const userObject = new User(emailid, password);
    userObject.age = 21;
    userObject.otp = otp();
    let oneHour = 36000000;
    userObject.otpexpiry = Date.now()  +  oneHour;
    const promise = UserCRUD.add(userObject);

    promise.then(data=>{
        const mail = require('../utils/mail');
        mail(emailid, response, userObject.otp);
        //response.json({message:'Register SuccessFully'});
    }).catch(err=>{
        response.json({message:'Some problem in Register '});
        console.log("Register Fail ",err);
    })

});
const token  = require('../utils/token');
route.post('/reactlogin',(request, response)=>{
    let userid = request.body.userid;
    let password = request.body.pwd;
    const userObject = new User(userid, password);
    const promise = userOperations.search(userObject);
    promise.then(data=>{
       let t =  token.createToken(userid);
            response.json({"result":data,"token":t});
        })
    .catch(err=>{
        response.json({message:'DB Issue in Login '+err});
        console.log('Error in Login ',err);
    })
    /*if(userid == password){
        response.json({message:'Welcome '+userid});
        //response.send('<h1>Welcome '+userid+"</h1>");
    }
    else{
        response.json({message:'Invalid Userid or Password '});
       // response.send('Invalid Userid or Password');
    }*/
    //response.send('Login Done');
});

route.post('/login',(request, response)=>{
    let userid = request.body.userid;
    let password = request.body.pwd;
    if(userid == password){
        response.send('<h1>Welcome '+userid+"</h1>");
    }
    else{
        response.send('Invalid Userid or Password');
    }
    //response.send('Login Done');
});
module.exports = route;