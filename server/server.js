// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('IP Hub Backend Running');
});

app.post('/api/listings', (req, res) => {
  const listing = req.body;
  console.log('Received listing:', listing);
  // In-memory or file-based temporary store goes here (TBD)
  res.status(201).json({ message: 'Listing received', data: listing });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
