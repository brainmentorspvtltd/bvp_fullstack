const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect(config.dbURL,{poolSize:config.poolSize},(err)=>{
    if(err){
        console.log('Connection Error in DB ',err);
    }
    else{
        console.log('Connection Created...');
    }
});
module.exports = mongoose;