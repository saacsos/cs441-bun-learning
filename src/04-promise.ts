const fetchData : Function = (id : number) : Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Data Loaded ${id}`), 2000);
    })
}

fetchData(1).then((data: string) => console.log(data))   // 1
fetchData(2).then((data: string) => console.log(data))   // 2
fetchData(3).then((data: string) => console.log(data))   // 3
console.log("Finish")  // 4

// 1 2 3 4