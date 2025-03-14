const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'banking_test',
  password: 'Sagar123',
  port: 5433, // Use 5433 for the test database
});

const seedDatabase = async () => {
  try {
    await pool.query('TRUNCATE TABLE accounts RESTART IDENTITY CASCADE'); // Clear existing data
    await pool.query(
      'INSERT INTO accounts (name, balance) VALUES ($1, $2), ($3, $4)',
      ['Alice', 1000, 'Bob', 500]
    );
    console.log('Test database seeded successfully!');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await pool.end();
  }
};

seedDatabase();