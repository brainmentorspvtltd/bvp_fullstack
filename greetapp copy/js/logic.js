'use strict'
window.addEventListener('load', bindEvents);


function bindEvents(){
    // document.querySelector('#b1'); // reading a button by # id
    // addEventListener --> attaching event
    // event name and function name to be call
    document.querySelector('#b1').addEventListener('click',sayWelcome);
    document.querySelector('#b2').addEventListener('click',clearAll);
    document.querySelector('#lname').addEventListener('keyup',executeGreet);
}

function executeGreet(event){
console.log('Event is ');
let keyAscii = event.keyCode;
console.log('Key Ascii ',keyAscii);
if(keyAscii==13){
    sayWelcome();
}

}
// Event Binding

//alert("Hello I  Load First");

//document.getElementById('b1')
function initCap(name){
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
}
function sayWelcome(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    firstName = initCap(firstName);
    lastName = initCap(lastName);
    //var msg = "Welcome "+initCap(firstName)+ " "+initCap(lastName);
    var msg = "Welcome "+firstName + " "+lastName;

    console.log('Say Welcome Called...');
    document.getElementById('result').innerHTML = "<i>"+msg+"</i>";
}

function clearAll(){
    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    document.getElementById('result').innerHTML ='';
}