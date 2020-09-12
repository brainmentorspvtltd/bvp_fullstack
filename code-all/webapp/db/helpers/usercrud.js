const UserModel = require('../schema/user');
const encryptObj = require('../../utils/encrypt');
const userOperations = {
    add(userObject){
        userObject.password = encryptObj.encrypt(userObject.password);
       let promise =  UserModel.create(userObject);
        return promise;
    },
    async alreadyVerified(otpNo){
        const result = await UserModel.findOne({otp:otpNo,otpexpiry:{$gt:Date.now()},verified:'Y'});
        return result;
    },
    updateVerification(doc){
        doc.verified = 'Y';
        const promise = doc.save();
        return promise;
    },
    verifyOTP(otpNo){
        const promise = UserModel.findOne({otp:otpNo,otpexpiry:{$gt:Date.now()},verified:'N'});
        return promise;
    },
    search(userObject){
        const pr = new Promise((resolve, reject)=>{
            UserModel.findOne({userid:userObject.userid},(err,doc)=>{
                if(doc && doc.userid){
                    let dbPassword  = doc.password;
                    let plainPassword = userObject.password;
                    console.log('DB PWD ',dbPassword, 'Plain ',plainPassword);
                    let result =encryptObj.compare(dbPassword,plainPassword);
                    console.log('Result is ',result);
                    if(result){
                        resolve({message:'Welcome '+userObject.userid});
                    }
                    else{
                        resolve({message:'Invalid Userid or Password'});
                    }
                }
                else{
                    resolve({message:'Invalid Userid or Password'});
                }
            })
        });
        return pr;

    },
    update(){

    },
    remove(){

    }
}
module.exports = userOperations;
