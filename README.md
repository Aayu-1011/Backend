Express Backend Server
This repository contains an Express backend server built with TypeScript, utilizing a JSON file as a simple database for storing form submissions.

Features
Endpoints:

/ping - GET request that always returns true.
/submit - POST request to save form submissions.
/read - GET request with query parameter for retrieving saved submissions.
Database:

Uses a JSON file (db.json) to store submissions.
Prerequisites
Before running the server locally, ensure you have the following installed:

Node.js and npm
TypeScript
Getting Started
Follow these instructions to get the project up and running on your local machine.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/express-backend.git
cd express-backend
Install dependencies:

bash
Copy code
npm install
Running the Server
To start the Express server locally:

bash
Copy code
npm start
The server will run at http://localhost:3000 by default.

Available Endpoints
Ping Endpoint:

URL: http://localhost:3000/ping
Method: GET
Description: Returns { "success": true }.
Submit Endpoint:

URL: http://localhost:3000/submit
Method: POST
Parameters: name, email, phone, github_link, stopwatch_time
Description: Saves form submissions to db.json.
Read Endpoint:

URL: http://localhost:3000/read
Method: GET
Query Parameter: index (0-index for retrieving submissions)
Description: Retrieves the (index+1)th form submission from db.json.
Project Structure

├── src/                  # Source files
│   ├── index.ts          # Express server setup
│   ├── routes.ts         # Route definitions
├── dist/                 # Compiled JavaScript files (generated)
├── db.json               # JSON database file for submissions
├── node_modules/         # Node.js modules (generated)
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript compiler configuration

License
This project is licensed under the MIT License - see the LICENSE file for details.


Express.js
TypeScript
npm
Troubleshooting
If encountering issues, ensure Node.js and npm are up to date.
Check package.json scripts and dependencies.
