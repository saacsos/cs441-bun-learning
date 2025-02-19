console.log(addOne(10))
console.log("multiply (hoisted):", multiply)

// Function declaration : always hoisting
function addOne(a : number) : number {
    return a + 1
}

console.log(addOne(10))

// Arrow Function
var multiply = (a, b) => { return a * b }
console.log("multiply after initial:", multiply(10, 20))

multiply = (a, b) => a * b
console.log(multiply(35, 8.8))

let multiply2 : Function = (a : number, b : number) : number => 2 * a * b
console.log(multiply2(20, 10))

// Default Parameters
function increase(a : number, b : number = 1) : number {
    return a + b
}
const subtract : Function = (a : number, b : number = 1) : number => a - b

console.log(increase(77, 5), increase(77), subtract(30), subtract(30, 7))

// Rest Parameter
const average : Function = (...numbers : Array<number>) : number => {
    let total = 0
    for (let num of numbers) {
        total += num
    }
    return total / numbers.length
}
console.log("Average:", average(8, 9, 12, 17));

// Optional Parameter
function hello(name: string, age? : number) {
    if (age == undefined) {
        console.log(`Hello ${name}`);
    } else {
        console.log(`Hello, I'm ${name}, I'm ${age} years old.`);
        
    }
    
}

hello("Big")
hello("Biig", 22)

// ---------------------

// Closure
function counter() {
    let count = 0
    return function () {
        count++
        console.log(count)
    }
}

const my_counter = counter()
my_counter()
my_counter()
my_counter()

console.log("--------");

// HOFs - Higher-Order Functions
function repeat(n : number, action : Function) {
    for (let i = 0; i < n; ++i) {
        action(i)
    }
}

repeat(3, console.log)
console.log("---------")
repeat(4, my_counter)

