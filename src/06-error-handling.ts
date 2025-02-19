// throw
const div : Function = (a : number, b : number) : number => {
    if (b == 0) {
        throw Error("divided by zero")
    }

    return a / b;
}

try {
    console.log(div(7, 0))
} catch(error) {
    console.error("ERROR:::", error.message)
}