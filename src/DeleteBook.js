var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var bookType = require('./BookType');
var bookModel = require('./Book');
exports.remove = {
  type: bookType.BookType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async(root, args)=> {
    const removedBook = await bookModel.findByIdAndRemove(args.id)
    if (!removedBook) {
      throw new Error('error')
    }
    return removedBook;
  }
}