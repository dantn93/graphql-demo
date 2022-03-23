const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
// Load db methods
const mongoDataMethods = require('./data/db');
// Load schema and resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const app = express();
let server = null;
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({mongoDataMethods})
  });
  await server.start();
  server.applyMiddleware({ app });
}


startServer();

// connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://admin:Dan123456@cluster0.bzuif.gcp.mongodb.net/graphqldb?retryWrites=true&w=majority`);
    console.log('MongoDB connected');
    app.listen({ port: 4000 }, () => {
      console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    })
  } catch (error) {
    console.log("error: ", error.message);
    process.exit(1);
  }
}

connectDB();

