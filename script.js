let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book("the way of kings", "Brandon Sanderson", 1007, "read");
addBookToLibrary(book1);
const book2 = new Book("Snow crash", "neal stephanson", 450, "toread");
const book3 = new Book("Bands of Mourning", "Brandon sanderson", 390, "toread");
const book4 = new Book("The Hobbit", "JRR Tolkein", 1000, "toread");
const book5 = new Book(
  "Harry potter and the philosher's stone",
  "JK Rowling",
  350,
  "toread"
);
const book6 = new Book("Dune", "Frank Herbert", 883, "toread");

addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
// console.log(myLibrary)
// console.log(Book)
console.log(book3);
const container = document.querySelector(".container");
function display() {
  container.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const status = document.createElement("button");
    const del = document.createElement("button");
    title.textContent = `this is ${myLibrary[i].title}`;
    author.textContent = `this is ${myLibrary[i].author}`;
    pages.textContent = `this is ${myLibrary[i].pages}`;
    status.textContent = `${myLibrary[i].status}`;
    status.classList = "status-button";
    del.textContent = "delete";
    del.classList = `delete`;
    const bookContainer = document.createElement("div");
    bookContainer.classList = `book-box`;
    bookContainer.setAttribute("id", `${i}`);
    bookContainer.append(title, author, pages, status, del);
    container.appendChild(bookContainer);
  }
  const deleteButton = document.querySelectorAll(".delete");
  deleteButton.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log("clicked");
      item.parentNode.remove();
    });
  });
  const statusButton = document.querySelectorAll(".status-button");
  statusButton.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("clicked")
        console.log(`${item.textContent}`)
      if (item.textContent == "read") {
        item.textContent = "toread";
      } else {
        item.textContent = "read";
      }
    });
  });
}
display();
const inputBook = document.querySelector(".input-book");
const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
  if (inputBook.style.display === "none") {
    inputBook.style.display = "block";
  } else {
    inputBook.style.display = "none";
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let status = document.getElementById("status");
  if (title == "" || author == "" || pages == "" || status == "") {
    alert("fill alll the fields");
  } else {
    let newBook = new Book(
      title.value,
      author.value,
      pages.value,
      status.value
    );
    addBookToLibrary(newBook);
    console.log(myLibrary);
    display();
    inputBook.style.display = "none";
    title.value = "";
    author.value = "";
    pages.value = "";
    status.value = "";
  }
});
