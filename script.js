let myLibrary=[]

function Book(title,author,pages,status){
    this.title=title
    this.author=author
    this.pages=pages
    this.status=status
}

function addBookToLibrary(book){
    myLibrary.push(book)
}

const book1 = new Book("the way of kings","Brandon Sanderson",1007,"read")
addBookToLibrary(book1);
const book2 = new Book("Snow crash","neal stephanson",450,"reading")
const book3 = new Book("Bands of Mourning","Brandon sanderson",390,"toread")

addBookToLibrary(book2);
addBookToLibrary(book3);
// console.log(myLibrary)
// console.log(Book)
console.log(book3)
const container = document.querySelector(".container")
function display(){
    for(let i =0 ;i<myLibrary.length;i++){
        const title = document.createElement("p")
        const author = document.createElement("p")
        const pages = document.createElement("p")
        const status = document.createElement("p")
        const del = document.createElement("button")
        title.textContent = `this is ${myLibrary[i].title}`
        author.textContent = `this is ${myLibrary[i].author}`
        pages.textContent = `this is ${myLibrary[i].pages}`
        status.textContent = `this is ${myLibrary[i].status}`
        del.textContent = "delete"
        del.classList=`delete`
        const bookContainer = document.createElement("div");
        bookContainer.classList=`book-box`
        bookContainer.setAttribute("id",`${i}`)
        bookContainer.append(title,author,pages,status,del)
        container.appendChild(bookContainer)
    }
}
display()
const deleteButton=document.querySelectorAll(".delete")
deleteButton.forEach(item => {
    item.addEventListener("click",(e)=>{
        item.parentNode.remove();
    })
})