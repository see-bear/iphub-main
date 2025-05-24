// initDB.js - Run this once to create the listings table

const pool = require('../config/db');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS listings (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC NOT NULL,
    sellerId TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT now()
  );
`;

pool.query(createTableQuery)
  .then(() => {
    console.log('✅ listings table created or already exists');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Error creating listings table:', err);
    process.exit(1);
  });
