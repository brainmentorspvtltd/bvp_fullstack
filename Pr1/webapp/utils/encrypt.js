const bcrypt = require('bcrypt');
const { dbURL } = require('../db/config');
const encryptOperations = {
    salt:10,
    encrypt(password){
        return bcrypt.hashSync(password,this.salt);
    },
    compare(dbPassword, plainPwd){
       return bcrypt.compareSync(plainPwd,dbPassword);
    }
}
module.exports = encryptOperations;