const express = require('express');
const accountRoutes = require('./routes/accountRoutes');
const { connectDB } = require('./utils/db');

const app = express();
app.use(express.json());

// Connect to PostgreSQL
connectDB();

// Routes
app.use('/accounts', accountRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app; // Export only the app object