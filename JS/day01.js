//alert("I'm Javascript");

// Semicolon error examples
//[1,2].forEach(alert)

// 
// console.log("I am")
// [1,2].forEach(alert)

// above code will produce error

// console.log("i am");
// [1,2].forEach(alert)

/*
Nested comments not supported
*/

// variables

let message = 'Hello Lal';

console.log(message);

if(true){
   let msg = "U can get me";
   let msg2 = "Can u";
   console.log(msg);
}


//console.log(msg);
console.log(message);

function a(){
    var msg = "I am inside the function";
    console.log(msg);
}

//console.log(msg);

// calling a function
a();

// var has no block scope..
// it's a global scope or it's a function scope if you create inside the function

// Var tolerated redeclaration

var name = "Alif";
var name = "Mofij";

console.log(name);

let name2 = "Your Name";
//let name = "My Name"; // it will produce error.

// hoisted declaration

belowDeclaration = "I am declared at below";

console.log(belowDeclaration);

var belowDeclaration;

function test(){
    dec = "I am in below";    
    console.log(dec);
    var dec;
    
}

test();

