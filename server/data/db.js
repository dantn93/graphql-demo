const Book = require('../models/Book');
const Author = require('../models/Author');

const mongoDataMethods = {
  getAllBooks: async () => {
    return await Book.find();
  },
  getBookById: async (id) => {
    return await Book.findById(id);
  },
  getAllAuthors: async () => {
    return await Author.find();
  },
  getAuthorById: async (id) => {
    return await Author.findById(id);
  },
  getAllBookByAuthorId: async (id) => {
    return await Book.find({ authorId: id });
  },
  createAuthor: async args => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async args => {
    const newBook = new Book(args);
    return await newBook.save();
  }
}

module.exports = mongoDataMethods;