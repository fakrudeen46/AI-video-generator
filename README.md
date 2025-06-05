# Basic Express.js Project

This is a simple Express.js project with a structured setup for API development.

## Project Structure

```
src/
├── controllers/      # Request handlers
│   └── sampleController.js
├── routes/           # Route definitions
│   └── sampleRoutes.js
├── models/           # Data models (if any)
├── services/         # Business logic
├── middlewares/      # Custom middlewares
├── config/           # Configuration files
├── utils/            # Utility functions
└── index.js          # Main application entry point
package.json
README.md
...
```

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

## Running the server

To start the server, run:
```bash
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

*   **GET `/`**: Returns "Hello World!".
*   **GET `/api/sample`**: Returns a sample JSON response: `{ "message": "This is sample data" }`.