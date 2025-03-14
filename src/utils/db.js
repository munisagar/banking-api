const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'banking_test', // Use the test database
  password: process.env.DB_PASSWORD || 'Sagar123',
  port: process.env.DB_PORT || 5433, // Use 5433 for the test database
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connected');
  } catch (err) {
    console.error('PostgreSQL connection error', err);
  }
};

const closeDB = async () => {
  await pool.end();
  console.log('PostgreSQL connection closed');
};

module.exports = { pool, connectDB, closeDB };