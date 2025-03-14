const express = require('express');
const { createAccount } = require('../controllers/accountController');

const router = express.Router();

router.post('/', createAccount);

module.exports = router; // Ensure this is a valid router