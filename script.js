const body= document.querySelector(".main")
const form = document.querySelector("form")
const myLibrary= [
    {title: "xyz1", author: "abc", pages: 123, read: "Yes"},
    {title: "xyz2", author: "abc", pages: 123, read: "Yes"},
    {title: "xyz3", author: "abc", pages: 123, read: "Yes"},
    {title: "xyz4", author: "abc", pages: 123, read: "Yes"}

]
function Books(title, author, pages, read){
    this.title = title
    this.author= author
    this.pages = pages
    this.read = read
}
function addBookToLibrary(book) {
    myLibrary.push(book)
    console.log(myLibrary)
}

let read

function display(){
    for (let i = 0; i < myLibrary.length; i++) {
        const card= document.createElement("div")
        card.classList.add("card")
        body.appendChild(card)
        const title= document.createElement("div")
        title.classList.add("title")
        const author= document.createElement("div")
        author.classList.add("author")
        const pages= document.createElement("div")
        pages.classList.add("pages")
        read= document.createElement("button")
        read.classList.add("read")
        const remove= document.createElement("button")
        remove.classList.add("remove")
        remove.addEventListener("click", ()=>{
            body.removeChild(card)
        })
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)
        card.appendChild(remove)
        title.innerText=myLibrary[i]["title"]
        author.innerText=myLibrary[i]["author"]
        pages.innerText=myLibrary[i]["pages"]
        read.innerText=myLibrary[i]["read"]
        if(read.innerText=="Yes" | read.innerText=="yes"){
            read.innerText="Already Read"
        }
        else if(read.innerText=="No" | read.innerText=="no"){
            read.innerText="Not Read"
        }
    
    }
    read.addEventListener("click",()=>{
        if(read.innerText=="Already Read"){
            read.innerText="Not Read"
        }
        else if(read.innerText=="Not Read"){ 
            read.innerText="Already Read"
        }
    })
}




const button = document.querySelector(".submit")
const input= document.querySelectorAll("input")
const n = document.querySelector("#name")
const writer = document.querySelector("#writer")
const pageNo= document.querySelector("#pageNo")
const did= document.querySelector("#did")
button.addEventListener("click", ()=>{
    const empty= false
    for (let i = 0; i < input.length; i++) {
        if (input[i]== ""){
            empty=true   
        }
    }
    if (!empty){
        if (did.checkValidity()){
            const book= new Books(n.value, writer.value, pageNo.value, did.value )
            addBookToLibrary(book)
            display()
        }
    }
})

