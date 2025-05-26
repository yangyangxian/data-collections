import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../public')));

// Function to clear existing /api routes to prevent duplicates
function clearApiRoutes() {
  if (!app._router) return;
  app._router.stack = app._router.stack.filter(layer => {
    // Filter out routes starting with /api/
    return !(layer.route && layer.route.path.startsWith('/api/'));
  });
}

// Load API routes dynamically
async function loadApiRoutes() {
  clearApiRoutes();

  const apiDir = path.join(__dirname, 'api');
  for (const file of fs.readdirSync(apiDir)) {
    if (file.endsWith('.ts')) {
      const routeName = file.replace('.ts', '');
      if (routeName !== 'index') {
        const handler = (await import(`./api/${file}`)).default;
        app.get(`/api/${routeName}`, handler);
        console.log(`Registered API route: /api/${routeName}`);
      }
    }
  }
}

// Initial route loading
loadApiRoutes()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error loading API routes:', err);
  });
