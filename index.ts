import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
//import { ProcessEnv } from 'node:process';

const app = express();
const port = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
