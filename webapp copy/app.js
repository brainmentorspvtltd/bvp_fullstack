const express = require('express');
const app  = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.post('/login',(request, response)=>{
    let userid = request.body.userid;
    let password = request.body.pwd;
    if(userid == password){
        response.send('<h1>Welcome '+userid+"</h1>");
    }
    else{
        response.send('Invalid Userid or Password');
    }
    //response.send('Login Done');
})
app.listen(1234,(err)=>{
    if(err){
        console.log('Error on Server Start');
    }
    else{
    console.log('Server is Up and Running....');
    }
});