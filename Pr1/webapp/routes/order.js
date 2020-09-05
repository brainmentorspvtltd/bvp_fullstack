const express = require('express');
const route = express.Router();
route.get('/orderdetails',(request, response)=>{
    response.send('I am the Order '+request.query.id+" Name is "+request.query.name);
});
route.post('/payment',(request, response)=>{

});
route.get('/orderhistory',(request, response)=>{

});
route.post('/add',(request, response)=>{
    response.send('OrderRoute');
});
module.exports = route;