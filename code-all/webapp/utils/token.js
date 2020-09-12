const jwt = require('jsonwebtoken');

const token = {
    secretKey:'thisisasecretkey',
    createToken(userid){
        let myToken  = jwt.sign({'userid':userid},this.secretKey,{expiresIn:'1h'});
        return myToken;
    },
    verifyToken(tokenId){
        let decodedToken = jwt.verify(tokenId, this.secretKey);
        if(decodedToken && decodedToken.userid){
            return {verified:true, 'userid':decodedToken.userid};
        }
        else{
            return {verified:false};
        }
    }
}
module.exports = token;