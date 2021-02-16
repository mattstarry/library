const addBtn = document.querySelector("#add");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const bookTemplate = document.querySelector('.book');
const shelf = document.querySelector('.shelf');

let library = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false
}

function removeFromLibrary(book) {
    let index = library.indexOf(book);
    library.splice(index, 1);
    console.log(library);
}

function renderBook(book) {
    let bookDisplay = bookTemplate.cloneNode(true);
    let title = bookDisplay.querySelector('.title');
    title.textContent = "Title: " + book.title;
    let author = bookDisplay.querySelector('.author');
    author.textContent = "Title: " + book.author;
    let pages = bookDisplay.querySelector('.pages');
    pages.textContent = "Pages: " + book.pages;

    bookDisplay.id = "";
    shelf.appendChild(bookDisplay);
    let readbtn = bookDisplay.querySelector('.readbtn');
    readbtn.textContent = "Read: " + book.read

    let deletebtn = bookDisplay.querySelector('.deletebtn');
    deletebtn.addEventListener('click', function(){
        bookDisplay.remove();
        removeFromLibrary(book);
    });
    readbtn.addEventListener('click', function(){
        book.read = !book.read
        readbtn.textContent = "Read: " + book.read
    });
}

function createBookInLibrary(title, author, pages) {
    let book = new Book(title, author, pages);
    library.push(book);
    renderBook(book);
}

function onAdd() {
    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    if (title !== "" && author !== "" && pages !== "") {
        createBookInLibrary(title, author, pages);
    }
    else {
        alert('Please fill out all forms')
    }
}

addBtn.addEventListener('click', onAdd);