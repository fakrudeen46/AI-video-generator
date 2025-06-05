require('dotenv').config(); // Load .env file

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USER_TEST || 'root',
    password: process.env.DB_PASS_TEST || null,
    database: process.env.DB_NAME_TEST || 'mydatabase_test',
    host: process.env.DB_HOST_TEST || '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER_PROD,
    password: process.env.DB_PASS_PROD,
    database: process.env.DB_NAME_PROD,
    host: process.env.DB_HOST_PROD,
    dialect: 'mysql',
    // Add other production-specific options here, like SSL, connection pooling, etc.
  }
};
