const express = require('express');
const route = express.Router();
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

route.post('/reactlogin',(request, response)=>{
    let userid = request.body.userid;
    let password = request.body.pwd;
    if(userid == password){
        response.json({message:'Welcome '+userid});
        //response.send('<h1>Welcome '+userid+"</h1>");
    }
    else{
        response.json({message:'Invalid Userid or Password '});
       // response.send('Invalid Userid or Password');
    }
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