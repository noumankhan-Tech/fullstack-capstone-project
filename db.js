const { MongoClient } = require('mongodb');
require('dotenv').config();
let dbInstance = null;
const dbName = "giftdb";
const url = process.env.MONGO_URL;
async function connectToDatabase() {
    const client = new MongoClient(url);
    await client.connect();
    dbInstance = client.db(dbName);
    console.log("Connected to MongoDB");
    return dbInstance;
}
function getDb() {
    return dbInstance;
}
module.exports = { connectToDatabase, getDb };
