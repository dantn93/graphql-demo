const Author = require('../models/Author');
const Book = require('../models/Book');
const resolvers = {
  // QUERY
  Query: {
    books: (parent, args, context) => {
      return context.mongoDataMethods.getAllBooks();
    },
    book: (parent, args, context) => {
      return context.mongoDataMethods.getBookById(args.id);
    },
    authors: (parent, args, context) => {
      return context.mongoDataMethods.getAllAuthors();
    },
    author: (parent, args, context) => {
      return context.mongoDataMethods.getAuthorById(args.id);
    },
  },
  Book: {
    author: (parent, args, context) => {
      return context.mongoDataMethods.getAuthorById(parent.authorId);
    }
  },
  Author: {
    books: (parent, args, context) => {
      return context.mongoDataMethods.getAllBookByAuthorId(parent.id);
    }
  },

  // MUTATION
  Mutation: {
    createAuthor: async (parent, args, context) => {
      return context.mongoDataMethods.createAuthor(args);
    },
    createBook: async (parent, args, context) => {
      return context.mongoDataMethods.createBook(args);
    }
  }
}

module.exports = resolvers;