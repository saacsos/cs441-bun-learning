class Box<T> {
    data : T

    constructor(data: T) {
        this.data = data
    }

    getData() : T { return this.data}
}

function add<T> (a : T, b : T) : T | string | number {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    return a
}

console.log(add<string>("Hello", "World"));
console.log(add<number>(1, 2));

