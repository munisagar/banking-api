const { pool } = require('../utils/db');

const createAccount = async (req, res) => {
  const { name, balance } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO accounts (name, balance) VALUES ($1, $2) RETURNING *',
      [name, balance]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createAccount }; // Ensure this is exported correctly