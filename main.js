// alert("Welcome to my portfolio");
// diff between var, let, const
// Self calling function delaration in js

// var alert
// const alert

let hello = document.getElementById("helloBtn");

console.log("hello");

// let message = document.getElementById("message");

// message.textContent = "Added the text";


// self callikng function inside the click eveny listener
helloBtn.addEventListener("click", function(){
    var a = vasu;

message.textContent = "Added the text";

})

let color = document.getElementById("colorBtn");
color.addEventListener("click", function(){

document.body.style.backgroundColor = "#3e3eba";

})


// let country ="India";
let  pop = 12344;
let value = null;
let isActive = true;
const country ="India";

console.log(typeof country);
console.log(pop);
console.log(typeof value);
console.log(isActive);


let city = "Delhi";
city = "Mumbai";
console.log(city);


// country = "USA"
// console.log(country);



function newalpha( ){
// console.log("hello students : " + x);
document.getElementById("about").textContent= "Hello!";
}


// name("vasu");

function classes( x , y){
return x + y
}

let result = classes(5, 3);
console.log (result)



const double = x => x * 2;



const multiply = function(a, b) {
return a * b;
};


document.getElementById("myBtn").addEventListener("click", changeText);

function changeText(){
    
document.getElementById("about").textContent= "Hello!";
}

const arr = [10, 20, 30];
for (const v of arr) {

console.log(v);

// v = "3"
}

document.addEventListener("DOMContentLoaded",function(){

    const btn = document.getElementById("myBtn")
    btn.addEventListener("click", function(){
const textbox = document.getElementById("random").value;
    console.log(textbox)
document.getElementById("output").textContent = "hello" +textbox;
    });
    
});
     



