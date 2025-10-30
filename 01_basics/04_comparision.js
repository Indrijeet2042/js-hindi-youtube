// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true


console.log("2" > 1);
console.log("02" > 1);
// Note: Don't try comparing different dataTypes. It's not a good practice. 

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined < 0); //false

//strictCheck (===)
// It compares as well as do the dataType Checking.
console.log("2" === 2); //false
