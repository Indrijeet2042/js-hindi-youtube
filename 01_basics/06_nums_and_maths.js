const score = 400
console.log(score) //400

const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(1)); //100.0

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); //124
console.log(otherNumber.toPrecision(4)); //123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++=

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.1)); //4
console.log(Math.min(4, 2, 67, 43, 19, 25)); //2
console.log(Math.max(4, 2, 67, 43, 19, 25)); //67
console.log(Math.random()); // any number between 0 and 1
console.log((Math.random()*10) +1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // any random number greater than 10





