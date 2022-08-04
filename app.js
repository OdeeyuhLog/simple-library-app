// An array that stores all the information for every book.
let allBooks = [];

let title = document.getElementById('book-title'),
  author = document.getElementById('author-name'),
  pages = document.getElementById('page-count'),
  isRead = '';

// An onlick  function that adds a book and its details which have been provided
// by the user.
const addBookBtn = document.getElementById('add-book');

function bookInfo(title, author, pages, isRead = false) {
  this.title = title;
  this.author = author;
  this.pageCount = pages;
  this.isRead = isRead;
}

addBookBtn.onclick = function () {
  readStatus(document.getElementById('checkbox').checked);
  allBooks.push(new bookInfo(title.value, author.value, pages.value, isRead));
  console.log(allBooks);
  resetInput();
};

function readStatus(checkBox) {
  if (checkBox) {
    isRead = true;
  } else {
    isRead = false;
  }
}

function resetInput() {
  title.value = '';
  author.value = '';
  pages.value = '';
  document.getElementById('checkbox').checked = false;
}

// Modal open and close functionality
const openModal = document.querySelector('.add-book');
const modalform = document.querySelector('.modal');
const overlay = document.querySelector('.shadow');
const closeModal = document.querySelector('#close-modal');
// Open modal
openModal.onclick = function () {
  modalform.style.display = 'flex';
  overlay.style.display = 'block';
};
// Close modal
closeModal.onclick = function () {
  modalform.style.display = 'none';
  overlay.style.display = 'none';
};
