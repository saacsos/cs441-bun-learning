class Book {
    title : string
    totalPage : number
    private read : number

    constructor(title: string, totalPage : number) {
        this.title = title
        this.totalPage = totalPage
        this.read = 0
    }

    readMore(page : number) {
        if (page > 0) this.read += page
        if (this.read > this.totalPage) this.read = this.totalPage
    }

    getReadPage() { return this.read }

    print() {}
}

class ForeignBook extends Book {
    nation : string
    constructor(title: string, totalPage : number, nation : string) {
        super(title, totalPage)
        this.nation = nation
    }
}

Book.prototype.print = function () {
    console.log(`Title: ${this.title}, Read: ${this.read}/${this.totalPage}`)
}

const book = new Book("TypeScript", 400)
book.readMore(10)
console.log(book.title, book.getReadPage());
book.print()

const frenchBook = new ForeignBook("TypeScript", 410, "French")
frenchBook.readMore(40)
console.log(frenchBook.nation, frenchBook.title, frenchBook.getReadPage());

