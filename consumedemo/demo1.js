const fs = require('fs');
const chalk  = require('chalk');
const path = '/Users/amit/Documents/bvp-fullstack/score.txt';
console.log(chalk.red('Waiting for Changes'));
const obj = require('mathcalc2020');
console.log('MATH ',obj.a(10,20));
fs.watch(path,()=>{
    console.log(chalk.bold('Score Has Been Changed.'));
    let content = fs.readFileSync(path);
    console.log(chalk.green('SCORE :: '+content));
});