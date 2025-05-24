const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const auth = require('../middleware/auth');
const sanitize = require('../utils/sanitize');

// GET /api/listings – fetch all listings
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM listings ORDER BY timestamp DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching listings:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/listings – create new listing
router.post('/', auth, async (req, res) => {
  let { title, description, price, sellerId } = req.body;

  title = sanitize(title);
  description = sanitize(description);
  sellerId = sanitize(sellerId);

  if (
    !title || !description || !sellerId ||
    typeof price !== 'number'
  ) {
    return res.status(400).json({
      error: 'Invalid listing. Required fields: title (string), description (string), price (number), sellerId (string).',
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO listings (title, description, price, sellerId)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [title, description, price, sellerId]
    );

    res.status(201).json({
      message: 'Listing created',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('Error creating listing:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/listings/:id – delete a listing by ID
console.log('⚠️ DELETE route registered');

router.delete('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    const result = await pool.query('DELETE FROM listings WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    res.json({ message: 'Listing deleted', data: result.rows[0] });
  } catch (err) {
    console.error('Error deleting listing:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /api/listings/:id – update a listing by ID
router.put('/:id', auth, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  let { title, description, price, sellerId } = req.body;

  title = sanitize(title);
  description = sanitize(description);
  sellerId = sanitize(sellerId);

  if (
    isNaN(id) ||
    !title || !description || !sellerId ||
    typeof price !== 'number'
  ) {
    return res.status(400).json({
      error: 'Invalid data. Required: id (param), title, description, price, sellerId.',
    });
  }

  try {
    const result = await pool.query(
      `UPDATE listings
       SET title = $1, description = $2, price = $3, sellerId = $4, timestamp = now()
       WHERE id = $5
       RETURNING *`,
      [title, description, price, sellerId, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    res.json({ message: 'Listing updated', data: result.rows[0] });
  } catch (err) {
    console.error('Error updating listing:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
