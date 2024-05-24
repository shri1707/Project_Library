const main= document.querySelector(".main")
const form = document.querySelector("form")
const myLibrary= []
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
    main.innerHTML= ""
    for (let i = 0; i < myLibrary.length; i++) {
        const card= document.createElement("div")
        card.classList.add("card")
        main.appendChild(card)
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
        remove.innerText= "Remove Book"
        remove.addEventListener("click", ()=>{
            main.removeChild(card)
            myLibrary.splice(i, 1);
        })
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)
        card.appendChild(remove)
        title.innerText="Title:" + " " + myLibrary[i]["title"]
        author.innerText="Author:" + " " + myLibrary[i]["author"]
        pages.innerText="Pages:" + " " + myLibrary[i]["pages"]
        read.innerText= "Read:"+ " " + myLibrary[i]["read"]
        if(read.innerText=="Read: Yes" | read.innerText=="Read: yes"){
            read.innerText="Already Read"
        }
        else if(read.innerText=="Read: No" | read.innerText=="Read: no"){
            read.innerText="Not Read"
        }
    }
}
main.addEventListener("click", (event) => {
    if (event.target.classList.contains("read")) {
      const readButton = event.target;
      if (readButton.innerText === "Already Read") {
        readButton.innerText = "Not Read";
      } else {
        readButton.innerText = "Already Read";
      }
    }
  });




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

