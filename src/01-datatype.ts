// fruit = "mango"
var fruit : string = "mango"   // var: global scope - mutable
let number : number = 0.1       /* let: block scope - mutable */
const pi : number = 3.14159    /* const: block scope - immutable */
let numbers : Array<number> = [10, 20, 30, 40]  // array
let numArray : number[] = [0, 1, 2, 3]  // array
const student : {readonly name: string, score: number} = {
    name: "Peter",
    score: 30
}                    // object
let isEasy : boolean = false    // boolean     false, true
let obj : null = null      // null
let notA : undefined = undefined

student.score += 10

fruit = "avocado"
number += 0.2
let output : string = `Fruit: ${fruit}\nNumber: ${number}`    // string interpolation
console.log(output)
console.log("numbers:", numbers)
console.log("student:", student)
