class Book {
  constructor(firstName, lastName, title, year) {
    this.author = `${firstName} ${lastName}`;
    this.title = title;
    this.publicationYear = year;
  }
}

module.exports = Book;
