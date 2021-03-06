// Core
import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express';

// Database
import { connectDatabase } from './database'

// GraphQL
import { typeDefs, resolvers } from './graphql';

// Environment
import dotenv  from 'dotenv';
dotenv.config();

const mount = async (app: Application) => {
    const db = await connectDatabase();
    const server = new ApolloServer({ 
        typeDefs, 
        resolvers, 
        context: () => ({db}) 
    });

    server.applyMiddleware({ app, path: '/api' });
    app.listen(process.env.PORT);
    
    // Message
    console.log(`[app] : http://localhost:${process.env.PORT}`);

    // const listings = await db.listings.find({}).toArray();
    // console.log(listings)
}

mount(express());
