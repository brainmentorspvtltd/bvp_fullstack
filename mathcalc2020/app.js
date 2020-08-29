const calc = require('./calc');
exports.a =  function compute(x=0,y=0){
    let result = calc.add(x,y);
    let result2 = calc.sub(x,y);
    return {result, result2};
}
exports.b= function test(){
    console.log('I am Test');
}
module.exports = exports;
/*
if(10>2){
module.exports.a = compute;
}
else{
module.exports.b = test;
}*/
/*const obj = {
    compute, test
}
module.exports = obj;
*/



