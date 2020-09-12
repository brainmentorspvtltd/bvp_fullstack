const otp = require('otp-generator');
function generateOTP(){
    const otpNumber = otp.generate(4, { upperCase: true, specialChars: false });
    console.log('OTP No is ',otpNumber);
    return otpNumber;
}
module.exports = generateOTP;
