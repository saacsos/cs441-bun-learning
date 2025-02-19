// หา url จาก container name ของ Laravel 
const response = await fetch("http://laravel441-laravel.test-1/api")

console.log(response.status)

if (response.status == 200) {
    const data = await response.json()
    console.log(data)
}

const fetchData : Function = async (id : number) : Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Data Loaded ${id}`), 2000);
    })
}

const getData : Function = async (id: number) => {
    const data : string = await fetchData(id)
    return data
}
let result1 = await getData(1)
console.log(result1)
let result2 = await getData(2)
console.log(result2)
console.log(result1 + result2)

