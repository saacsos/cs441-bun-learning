const score : number = 80
let grade : string = "F"

if (score >= 80) grade = "A"
else if (score >= 75) grade = "B+"
else if (score >= 70) {
    grade = "B"
} else {
    grade = "F"
}

console.log(`Grade: ${grade}`)

const role : string = "ADMIN"
let redirectPage = "/index"

switch (role) {
    case "ADMIN":
        redirectPage = "/admin"
        break
    case "STAFF":
    case "MANAGER":
        redirectPage = "/manage"
        break
    default :
        redirectPage = "/404.html"
}
console.log("go to:", redirectPage)

console.log(score > 50 ? "pass" : "fail")

let total : number = 0
for (let i : number = 0; i < 10; ++i) {
    total += i
}
console.log(`Total: ${total}`)

let fibo : Array<number> = [1, 1, 2, 3, 5, 8, 13, 21, 34]
total = 0
fibo.forEach(num => total += num)
console.log(`Total: ${total}`)

total = 0
for (let num of fibo) {
    console.log(num)
}

for (let index in fibo) {
    console.log(`[${index}]: ${fibo[index]}`)
}

const student = {
    name: "John", score : 100
}
for (let key in student) {
    console.log(`${key}: ${student[key]}`)
}

let i = 0
while (i < fibo.length) {
    console.log(`fibo[${i}] = ${fibo[i]}`)
    i++
}