import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Serve static files from the public directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// API route to serve cars data
app.get('/api/cars', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/data/cars.json'));
});

// API route to serve countries data
app.get('/api/countries', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/data/countries.json'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
