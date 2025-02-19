interface MyDocument {
    id : number,
    title : string,
    creator_id: number,
    size: number
}

const documents : Array<MyDocument> = [
    {id: 1, title: "First Document", creator_id: 8, size: 256},
    {id: 2, title: "Second Document", creator_id: 15, size: 1256}, 
    {id: 3, title: "Third Document", creator_id: 8, size: 2256},
    {id: 4, title: "Fourth Document", creator_id: 8, size: 2356},
    {id: 5, title: "Fifth Document", creator_id: 12, size: 2456},
    {id: 6, title: "Sixth Document", creator_id: 1, size: 2563},
    {id: 7, title: "Seventh Document", creator_id: 19, size: 5256},
    {id: 8, title: "Eighth Document", creator_id: 18, size: 2356},
    {id: 9, title: "Ninth Document", creator_id: 8, size: 2536},
    {id: 10, title: "Tenth Document", creator_id: 8, size: 2546},
    {id: 11, title: "Eleventh Document", creator_id: 8, size: 2056},
    {id: 12, title: "Twelfth Document", creator_id: 5, size: 2560},
    {id: 13, title: "Thirteenth Document", creator_id: 5, size: 2056},
    {id: 14, title: "Fourteenth Document", creator_id: 8, size: 256}
]

const result3 : Array<string> = documents.map((doc) => `${doc.title} has ${doc.size} bytes`)
console.log( result3 )

const result4 : Array<MyDocument> = documents.filter( (doc) => doc.size < 1000 )
console.log( result4 ) 

const result5 : MyDocument | undefined = documents.find( (doc) => doc.size > 2000 && doc.creator_id === 5 )
console.log("result5:", result5)

const result6 : boolean = documents.some( (doc) => doc.id > 10 )
console.log("result6:", result6);

const result7 : boolean = documents.every( (doc) => doc.id > 10 )
console.log("result7:", result7);

const result8 : number = documents.reduce((sum, doc) => sum + doc.size, 0)
console.log("result8:", result8)

const result9 : Array<MyDocument> = [...documents].sort((a, b) => b.id - a.id)
console.log("result9:", result9)
console.log("-------");
console.log("documents:", documents)
