
const express = require('express');
const router = express.Router();
const { connectToDatabase, getDb } = require('../../db');
connectToDatabase();
router.get('/api/gifts', async (req, res) => {
  const db = getDb();
  const gifts = await db.collection('gifts').find({}).toArray();
  res.json(gifts);
});
router.get('/api/gifts/:id', async (req, res) => {
  const db = getDb();
  const gift = await db.collection('gifts').findOne({id: req.params.id});
  res.json(gift);
});
module.exports = router;
