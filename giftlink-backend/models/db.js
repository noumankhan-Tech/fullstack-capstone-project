const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbInstance = null;
const dbName = "giftlink";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;
