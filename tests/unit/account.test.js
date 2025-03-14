const { createAccount } = require('../../src/services/accountService');
const { pool } = require('../../src/utils/db');

// Mock the PostgreSQL pool
jest.mock('../../src/utils/db', () => ({
  pool: {
    query: jest.fn(),
  },
}));

describe('Account Service Unit Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks between tests
  });

  it('should create an account successfully', async () => {
    // Mock the pool.query method to return a successful result
    pool.query.mockResolvedValueOnce({
      rows: [{ id: 1, name: 'John Doe', balance: 1000 }],
    });

    const account = await createAccount('John Doe', 1000);

    expect(account).toEqual({ id: 1, name: 'John Doe', balance: 1000 });
    expect(pool.query).toHaveBeenCalledWith(
      'INSERT INTO accounts (name, balance) VALUES ($1, $2) RETURNING *',
      ['John Doe', 1000]
    );
  });

  it('should throw an error when account creation fails', async () => {
    // Mock the pool.query method to throw an error
    pool.query.mockRejectedValueOnce(new Error('Database error'));

    await expect(createAccount('John Doe', 1000)).rejects.toThrow(
      'Error creating account: Database error'
    );
  });
});