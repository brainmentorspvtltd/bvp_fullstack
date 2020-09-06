const express = require('express');
const route = express.Router();
const notecrud = require('../db/helpers/notecrud');
route.get('/list',(req,res)=>{
    const promise = notecrud.read();
    res.setHeader('Content-Type', 'application/json');
    promise.then(response=>{
        res.json({"result":response});
    }).catch(err=>{
        res.json({"err":err});
    })
});
route.post('/addnote',async (req, res)=>{
    const name = req.body.name;
    const desc = req.body.desc;
    const noteObject = {
        'name':name,
        'desc':desc
    };
    try{
    const response = await notecrud.add(noteObject);
        if(response){
            res.json({message:'Note Added SuccessFully'});
        }
        else{
            res.json({message:'Problem in Not Add '});
        }
}
    catch(e){
        res.json({message:'Problem in Not Add Error Occur '});
    }
});

module.exports = route;
