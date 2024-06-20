# Backend-Server
### `index.ts` Explanation

#### Imports and Middleware Setup
```typescript
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```
- **Imports**: Imports necessary modules from `express` and `body-parser`.
- **App Initialization**: Initializes an Express application (`app`) and sets the port from the environment variables or defaults to 3000.
- **Middleware Setup**: Configures `body-parser` middleware to handle JSON and URL-encoded data.

#### Example Routes
```typescript
// Example routes with explicitly defined types
app.get('/ping', (req: Request, res: Response) => {
    res.json({ success: true });
});

app.post('/submit', (req: Request, res: Response) => {
    // Example of handling form submission with type-checked req.body
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    // Process the submission data as needed
    res.json({ message: 'Form submitted successfully' });
});

app.get('/read', (req: Request, res: Response) => {
    const index = Number(req.query.index) || 0;
    // Example of type-checked query parameter usage
    res.json({ message: `Reading submission at index ${index}` });
});


- **Example routes definition**: Defines three routes using Express:

  1. **GET `/ping`**: Responds with a JSON object `{ success: true }`.
  2. **POST `/submit`**: Handles form submissions and extracts data (`name`, `email`, `phone`, `github_link`, `stopwatch_time`) from `req.body`. It responds with `{ message: 'Form submitted successfully' }`.
  3. **GET `/read`**: Retrieves data based on an optional query parameter `index`. If not provided, defaults to `0`. Responds with a message indicating the index being read (`{ message: `Reading submission at index ${index}` }`).

### `routes.ts` Explanation

#### Imports and Initialization
```typescript
import express, { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const dbPath = path.join(__dirname, 'db.json');
```
- **Imports**: Imports necessary modules from `express`, `fs`, and `path`.
- **Router Initialization**: Creates a new Express router (`router`).
- **Database Path**: Defines the path to a JSON file (`db.json`) to store data.

#### Route Definitions
```typescript
// /ping endpoint
router.get('/ping', (req: Request, res: Response) => {
  res.json(true);
});

// /submit endpoint
router.post('/submit', (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;

  // Read the existing data
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  // Append the new submission
  data.push({ name, email, phone, github_link, stopwatch_time });

  // Write back to the file
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  res.json({ success: true });
});

// /read endpoint
router.get('/read', (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string, 10);

  // Read the existing data
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

  if (index >= 0 && index < data.length) {
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Index out of bounds' });
  }
});
```
- **Route Handlers**:
  1. **`/ping`**: Responds with a JSON boolean `true`.
  2. **`/submit`**: Handles POST requests to submit data (`name`, `email`, `phone`, `github_link`, `stopwatch_time`). Reads existing data from `db.json`, appends new submission, and writes back to the file. Responds with `{ success: true }`.
  3. **`/read`**: Handles GET requests to read data based on an optional query parameter `index`. Reads data from `db.json`, validates the index, and responds with either the data at the specified index or a 404 error if out of bounds.

#### Export
```typescript
export default router;
```
- **Exports the Router**: Exports the `router` instance to be used in other parts of the application.

