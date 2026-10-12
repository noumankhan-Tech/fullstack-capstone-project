const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.get('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        let query = {};
        if (req.query.name && req.query.name.trim() !== '') {
            query.name = { $regex: req.query.name, $options: "i" };
        }
        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
