const { pool } = require('../utils/db');

// Service to create a new account
const createAccount = async (name, balance) => {
  try {
    const result = await pool.query(
      'INSERT INTO accounts (name, balance) VALUES ($1, $2) RETURNING *',
      [name, balance]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Error creating account: ${err.message}`);
  }
};

module.exports = { createAccount };