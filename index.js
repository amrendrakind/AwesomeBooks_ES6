import { DateTime } from './modules/luxon.js';
import {
  addBook, getStorageData, displayBooks,
} from './modules/books.js';
import { listActive, addNewActive, contactActive } from './modules/navigation.js';
import Library from './modules/library.js';

const library = new Library();
library.awesomeBooks = [];

window.onbeforeunload = () => {
  getStorageData(library);
  displayBooks(library);
};

const DateAndTime = () => {
  const dt = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  document.getElementById('date-time').innerHTML = dt;
};

setInterval(DateAndTime, 60);

window.onload = listActive;
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e) => { e.preventDefault(); addBook(library); });
getStorageData(library);
displayBooks(library);

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

list.addEventListener('click', listActive);
addNew.addEventListener('click', addNewActive);
contact.addEventListener('click', contactActive);