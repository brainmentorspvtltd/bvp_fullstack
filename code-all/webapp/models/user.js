class User{
    constructor(userid, password){
        this.userid = userid;
        this.password = password;
        this._age = 0;
        this.city = '';
        this.phone = '';
        this.otp = '';
        this.otpexpiry = undefined;
    }
    set age(age){
        this._age = age;
    }
    get age(){
        return this._age;
    }
}
module.exports = User;