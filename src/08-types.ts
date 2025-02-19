// Union Type (|)
let orderStatus : string | number
orderStatus = "Pending"
orderStatus = 1
//  orderStatus = true  // error on build

console.log(orderStatus);


// Literal Type
let userRole : "admin" | "staff" | "guest"
userRole = "admin"
// userRole = "superadmin"
console.log(userRole)

// interface
interface Student { readonly name: string, score: number }

// interface is extendable
interface ForeignStudent extends Student {nation: string}

const students : Student[] = [];
students[0] = {
    name: "John",
    score: 68.8
}

console.log(students[0]);

// Type Alias
type Product = { id: number, readonly name: string, price: number, location?: string }

type ImportProduct = Product & {from : string} 

const products : Array<Product> = [];
products[0] = {
    id : 1,
    name: "Computer",
    price: 50000
}
products[1] = {
    id: 2,
    name: "Chair",
    price: 1990,
    location: "708"
}

for (let item of products) {
    console.log(item)
}
