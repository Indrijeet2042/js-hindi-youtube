//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//JavaScript is a dynamically typed language, not a statically typed one. 
//This means that:
//Type checking occurs at runtime: The type of a variable is determined when the code is executed, 
// rather than during a compilation phase before execution.

//Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Indrijeet",
    age: 28,
}

const myFunction = function(){
    console.log("Hellow Worlds");
    
}

console.log(myFunction)

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "IndrijeetKumardotcom"

let anotherName = myYoutubename
anotherName = "Kumar"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "kumarindrjeet2042@gmail.com",
    upi: "9872716048@pthdfc"
}

let userTwo = userOne

userTwo = userOne

userTwo.email = "kumarindrijeet2042@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



