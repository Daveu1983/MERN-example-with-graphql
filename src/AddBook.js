var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('./BookType');
var bookModel = require('./Book');
exports.addBook = {
  type: bookType.BookType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
        type: new GraphQLNonNull(GraphQLString),
      }
  },
  resolve: async(root, args)=> {
  
    const uModel = new bookModel(args);
    const newBook = await uModel.save();
    if (!newBook) {
      throw new Error('error');
    }
    return newBook
  }
}