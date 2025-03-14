// Global setup for tests (if needed)
console.log('Running global test setup...');

// Example: Set up environment variables for testing
process.env.DB_USER = 'postgres';
process.env.DB_HOST = 'localhost';
process.env.DB_NAME = 'banking_test'; // Use the test database
process.env.DB_PASSWORD = 'Sagar123';
process.env.DB_PORT = '5433'; // Use 5433 for the test database
process.env.PORT = '3000';