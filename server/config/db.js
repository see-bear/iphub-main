const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'iphub',
  password: 'ThingsToday',  // leave blank for peer auth
  port: 5432,
});

module.exports = pool;
