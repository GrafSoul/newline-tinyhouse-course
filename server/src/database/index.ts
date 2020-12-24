import { MongoClient } from 'mongodb';
import dotenv  from 'dotenv';
dotenv.config();

const user = process.env.USER;
const userPassword = process.env.USER_PASSWORD;
const cluster = process.env.CLUSTER;

const url = 
`mongodb+srv://${user}:${userPassword}${cluster}.nvckw.mongodb.net/<dbname>?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
    const client = await MongoClient.connect(url, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });

    const db = client.db('main');

    return {
        listings: db.collection('test_listings')
    }
} 