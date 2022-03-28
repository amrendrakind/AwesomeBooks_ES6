const saveBooks = (library) => {
  localStorage.setItem('myAwesomeBooks', JSON.stringify(library.awesomeBooks));
};

const displayBooks = (library) => {
  const booksList = document.querySelector('.books');
  booksList.innerHTML = '';
  let i = 0;
  library.awesomeBooks.forEach((book) => {
    // eslint-disable-next-line no-plusplus
    i++;
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    if (i % 2 !== 0) {
      bookElement.classList.add('odd-color');
    }
    const headTitle = document.createElement('h2');
    headTitle.textContent = `"${book.title}" by ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => {
      library.removeBook(book.id);
      displayBooks();
    });
    bookElement.appendChild(headTitle);
    bookElement.appendChild(removeBtn);
    booksList.appendChild(bookElement);
  });
  saveBooks(library);
};

const getStorageData = (library) => {
  const localFormData = JSON.parse(localStorage.getItem('myAwesomeBooks'));
  if (localFormData == null) {
    library.awesomeBooks = [];
  } else {
    library.awesomeBooks = localFormData;
  }
};

const generateBookID = () => {
  const id = Math.random().toString();
  return id;
};

const addBook = (library) => {
  const form = document.querySelector('form');
  const title = form.querySelector('#title');
  const author = form.querySelector('#author');

  if (author.value && title.value) {
    const bookTitle = title.value;
    const bookAuthor = author.value;
    const bookID = generateBookID();
    library.addBook(bookTitle, bookAuthor, bookID);
    displayBooks();
    saveBooks();
    title.value = null;
    author.value = null;
  }
};

export {
  addBook, getStorageData, displayBooks,
};
