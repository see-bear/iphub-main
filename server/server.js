// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const statusRouter = require('./routes/status');
const listingsRouter = require('./routes/listings');
const uploadsRouter = require('./routes/uploads');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

// Mount all routers
app.use('/api/status', statusRouter);
app.use('/api/listings', listingsRouter);
app.use('/api/uploads', uploadsRouter);

// Root route
app.get('/', (req, res) => {
  res.send('IP Hub Backend Running');
});


app.use((req, res) => {
  res.status(404).json({
    error: 'Fallback handler',
    method: req.method,
    path: req.path,
  });
});



app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});
