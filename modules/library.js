export default class Library {
  constructor(Title, Author, ID) {
    this.title = Title;
    this.author = Author;
    this.id = ID;
  }

addBook = (bookTitle, bookAuthor, bookID) => {
  const awesomeBook = {
    title: bookTitle,
    author: bookAuthor,
    id: bookID,
  };
  this.awesomeBooks.push(awesomeBook);
};

removeBook = (id) => {
  this.awesomeBooks = this.awesomeBooks.filter((book) => book.id !== id);
};
}