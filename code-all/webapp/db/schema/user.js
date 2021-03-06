const mongoose = require('../connection');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    'userid':{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        minLength:3,
        maxLength:25
    },
    'password':{
        type:String,
        required:true,
        minLength:3
    },
    'otp':{type:String},
    'otpexpiry':{type:Date},
    'verified':{type:String, default:'N'},
    userInfo:{}
});
const UserModel = mongoose.model('users',userSchema);
module.exports = UserModel;