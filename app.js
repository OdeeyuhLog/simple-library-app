// An array that stores all the information for every book.
let allBooks = [];

let title = document.getElementById('book-title'),
  author = document.getElementById('author-name'),
  pages = document.getElementById('page-count'),
  isRead = '';

// An onlick  function that adds a book and its details which have been provided
// by the user.
const addBookBtn = document.getElementById('add-book');

function bookInfo(title, author, pages, wasRead = false) {
  this.title = title;
  this.author = author;
  this.pageCount = pages;
  this.isRead = wasRead;
  this.changeStatus = function () {
    if (this.isRead === true) {
      this.isRead = false;
    } else if (this.isRead === false) {
      this.isRead = true;
    }
  };
}

const form = document.querySelector('form');

addBookBtn.onclick = function () {};

form.addEventListener('submit', function (event) {
  event.preventDefault();
  readStatus(document.getElementById('checkbox').checked);
  allBooks.push(new bookInfo(title.value, author.value, pages.value, isRead));
  modalform.style.display = 'none';
  overlay.style.display = 'none';
  resetInput();
  createCards();
  removeBooks();
  changeReadStatus();
});

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

// Create the card that contains that book information
const bookContainer = document.querySelector('.main');

function createCards() {
  let cardNum = 0;
  bookContainer.innerHTML = '';
  allBooks.forEach((book) => {
    // Create the card div
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-cardnum', cardNum++);

    // Create the book title
    const card_title = document.createElement('h2');
    card_title.classList.add('card-title');
    card_title.textContent = book.title;
    card.appendChild(card_title);

    // Create delete button
    const deleteBtn = document.createElement('img');
    deleteBtn.setAttribute('src', 'assets/delete.svg');
    deleteBtn.setAttribute('id', 'delete-button');
    card.appendChild(deleteBtn);

    // Show author of the book
    const author_name = document.createElement('h3');
    author_name.classList.add('author-name');
    author_name.textContent = book.author;
    card.appendChild(author_name);

    // Show number of pages of the book
    const page_numbers = document.createElement('p');
    page_numbers.classList.add('page-numbers');
    page_numbers.textContent = `${book.pageCount} PAGES`;
    card.appendChild(page_numbers);

    // Create label of checkbox
    const div = document.createElement('div');
    div.classList.add('read-status');
    const labelCb = document.createElement('label');
    labelCb.textContent = 'READ?';
    labelCb.setAttribute('for', 'card-status');
    div.appendChild(labelCb);

    // Create checkbox object
    const readCheck = document.createElement('input');
    readCheck.setAttribute('type', 'checkbox');
    readCheck.setAttribute('id', 'check-status');
    readCheck.checked = book.isRead;
    div.appendChild(readCheck);
    card.appendChild(div);

    // Append the card ultimately
    bookContainer.appendChild(card);
    removeBooks();
    changeReadStatus();
  });
}

// Remove a book from an array;
function removeBooks() {
  const allDelete = document.querySelectorAll('#delete-button');
  allDelete.forEach((deleteBtn) => {
    deleteBtn.onclick = function () {
      let parent = deleteBtn.parentElement;
      allBooks.splice(parent.dataset.cardnum, 1);
      createCards();
    };
  });
}

// Change the read status of a book dynamically
function changeReadStatus() {
  const allCheckbox = document.querySelectorAll('#check-status');
  allCheckbox.forEach((checkbox) => {
    checkbox.onclick = function () {
      let parent = checkbox.parentElement.parentElement;
      let index = parent.dataset.cardnum;
      allBooks[index].changeStatus();
    };
  });
}

// Modal open and close functionality
const openModal = document.querySelector('.add-bookbtn');
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
