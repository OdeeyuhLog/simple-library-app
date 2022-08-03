const addBookBtn = document.querySelector('.add-book');

// An array that stores all the information for every book.
let allBooks = [];

let title = 'Book of Pandora',
  author = 'Deez',
  pages = 5;

// An onlick  function that adds a book and its details which have been provided
// by the user.
function bookInfo(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pageCount = pages;
  this.isRead = isRead;
}

function addBook() {
  addBookBtn.onclick = function () {
    allBooks.push(new bookInfo(title, author, pages));
  };
}

addBook();

// Modal open and close functionality
const openModal = document.querySelector('.add-book');
const modalform = document.querySelector('.modal');
const overlay = document.querySelector('.shadow');
openModal.onclick = function () {
  modalform.style.display = 'flex';
  overlay.style.display = 'block';
};
