function Books(title, author, pages, read){
    this.title = title
    this.author= author
    this.pages = pages
    this.read = read
    this.info= function(){
        return `${this.title}, by ${this.author}, ${this.pages}, ${this.read}`
    }
}

const hobit = new Books("The Hobbit","J.R.R Tolkin", "295 pages", "Not yet" )
console.log(hobit.info());