const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ message: "GET /api/uploads works" }));
router.post('/', (req, res) => res.json({ message: "POST /api/uploads works" }));
router.put('/', (req, res) => res.json({ message: "PUT /api/uploads works" }));
router.delete('/', (req, res) => res.json({ message: "DELETE /api/uploads works" }));

module.exports = router;
