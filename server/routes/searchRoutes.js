const express = require('express');
const router = express.Router();
const { connectToDatabase, getDb } = require('../../db');
connectToDatabase();
router.get('/api/search', async (req, res) => {
  const db = getDb();
  const category = req.query.category;
  let query = {};
  if (category) query.category = category;
  const results = await db.collection('gifts').find(query).toArray();
  res.json(results);
});
module.exports = router;
