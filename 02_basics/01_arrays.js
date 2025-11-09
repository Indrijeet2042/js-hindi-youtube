// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array Methods

myArr.push(6);
console.log(myArr); // Adds 6 at the end of the array.

myArr.pop() // Removes any element at the end of the array

myArr.unshift(9) // Adds 9 at the beginning of the Array.
myArr.shift() // Removes an element at the beginning of the Array

console.log(myArr)

console.log(myArr.includes(9)) // false
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(myArr) // [0, 1, 2, 3, 4, 5]
console.log(newArr) // 0,1,2,3,4,5   Join() converts the array into a string

//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [1, 2]

console.log("B ", myArr); // [0, 1, 2, 3, 4, 5];

const myn2 = myArr.splice(1, 3)
console.log(myn2); // [1, 2, 3]
console.log("C ", myArr); // [0, 4, 5]






