let score = "22"

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number

let score1 = "22abc"

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1) //number
console.log(valueInNumber1); //NaN

let score2 = null

console.log(typeof score); //object
console.log(typeof(score)); //object
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2) //number
console.log(valueInNumber2); //0

let score3 = undefined

console.log(typeof score); //undefined
console.log(typeof(score)); //undefined
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3) //number
console.log(valueInNumber3); //NaN

let score4 = true

console.log(typeof score); //boolean
console.log(typeof(score)); //boolean
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4) //number
console.log(valueInNumber4); //1

let score5 = "Indrijeet"

console.log(typeof score); //string
console.log(typeof(score)); //string
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5) //number
console.log(valueInNumber5); //NaN

let someNumber = 22

let stringNumber = String(someNumber) //22
console.log(typeof stringNumber); //string


//************************Operations ****************************

let value = 3
let negValue = -value

console.log(negValue); //-3

let str1 = "hello"
let str2 = " Indrijeet"
let str3 = str1 + str2
console.log(str3); // hello Indrijeet

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 3); //122
console.log(1 + 2 + "2"); //32

