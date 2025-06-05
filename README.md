# Basic Express.js Project

This is a simple Express.js project with a structured setup for API development, including database integration with Sequelize ORM.

## Project Structure

```
src/
├── controllers/      # Request handlers
│   └── sampleController.js
├── routes/           # Route definitions
│   └── sampleRoutes.js
├── models/           # Sequelize models (e.g., User.js, index.js for DB init)
├── services/         # Business logic
├── middlewares/      # Custom middlewares
├── config/           # Configuration files (e.g., config.js for Sequelize)
├── utils/            # Utility functions
└── index.js          # Main application entry point
.env                  # Environment variables (ignored by Git)
.nvmrc                # Node version specification
package.json
README.md
...
```

The project uses Sequelize ORM for database interactions. Model definitions are in `src/models/` and database configuration is managed by `src/config/config.js` and `src/models/index.js`.

## Environment

This project is configured to use **Node.js v22.16.0**.

If you have [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) installed, you can switch to the correct Node.js version by running the following command in the project's root directory:

```bash
nvm use
```
This command reads the `.nvmrc` file located in the project root.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project_directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   This will install Express.js, Sequelize, MySQL2, Dotenv, and other necessary packages.

## Database Setup

This project requires a running MySQL server instance.

1.  **Create Database:**
    *   Ensure you have MySQL installed and running.
    *   Create a database (e.g., `mydatabase` or your chosen name).

2.  **Environment Variables (`.env` file):**
    *   In the root of the project, create a `.env` file. This file stores your database credentials and other environment-specific settings. It is **ignored by Git** for security.
    *   Add the following content, replacing placeholder values with your actual database credentials:
        ```
        DB_HOST=localhost
        DB_USER=your_db_user
        DB_PASS=your_db_password
        DB_NAME=your_db_name
        NODE_ENV=development
        ```
    *   Ensure the `DB_USER` has the necessary permissions to access and modify `DB_NAME`.

## Running the server

To start the server, run:
```bash
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

*   **GET `/`**: Returns "Hello World!".
*   **GET `/api/sample`**: Returns a sample JSON response: `{ "message": "This is sample data" }`.
*   **POST `/api/users`**: Creates a new user.
    *   **Request Body Example:**
        ```json
        {
          "username": "testuser",
          "email": "test@example.com",
          "password": "password123"
        }
        ```
    *   **Success Response (201):** Details of the created user (excluding password).
    *   **Error Responses:**
        *   `400 Bad Request`: If required fields are missing or validation fails (e.g., invalid email format).
        *   `409 Conflict`: If the email already exists.
        *   `500 Internal Server Error`: For other server-side issues.