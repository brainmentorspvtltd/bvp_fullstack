function initCap(name){
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()
}
function sayWelcome(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var msg = "Welcome "+initCap(firstName)+ " "+initCap(lastName);
    console.log('Say Welcome Called...');
    document.getElementById('result').innerHTML = "<i>"+msg+"</i>";
}

function clearAll(){
    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    document.getElementById('result').innerHTML ='';
}