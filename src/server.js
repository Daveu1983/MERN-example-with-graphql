const express = require('express')
const app = express()
const mongoose = require('mongoose');
const connectDB = require('./connection');
const graphqlExpress = require("express-graphql").graphqlHTTP;
const bookSchema = require('./BookSchema').BookSchema;

connectDB()

app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'),  () =>{
    console.log("Node app is running at localhost:" + app.get('port'))
});

app.use('/graphql', graphqlExpress({
    schema: bookSchema,
    rootValue: global,
    graphiql: true
}));
