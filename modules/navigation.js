// Website Navigation

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const booksSelf = document.querySelector('.books-self');
const formAddBook = document.querySelector('.add-book');
const contactInfo = document.querySelector('.contact-info');

const listActive = () => {
  list.classList.add('active-link');
  addNew.classList.remove('active-link');
  contact.classList.remove('active-link');
  booksSelf.classList.remove('hide');
  formAddBook.classList.add('hide');
  contactInfo.classList.add('hide');
};

const addNewActive = () => {
  addNew.classList.add('active-link');
  list.classList.remove('active-link');
  contact.classList.remove('active-link');
  formAddBook.classList.remove('hide');
  contactInfo.classList.add('hide');
  booksSelf.classList.add('hide');
};

const contactActive = () => {
  contact.classList.add('active-link');
  list.classList.remove('active-link');
  addNew.classList.remove('active-link');
  booksSelf.classList.add('hide');
  formAddBook.classList.add('hide');
  contactInfo.classList.remove('hide');
};

list.addEventListener('click', listActive);
addNew.addEventListener('click', addNewActive);
contact.addEventListener('click', contactActive);

export { listActive, addNewActive, contactActive };