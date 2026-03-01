import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Create Vite server in middleware mode and configure the app type as 'custom',
  // which disables Vite's own HTML serving logic so the parent server can take control.
  const vite = await createViteServer({
    server: { 
      middlewareMode: true,
      hmr: {
        port: 3000
      }
    },
    appType: 'custom',
  });

  // Use vite's connect instance as middleware.
  // If you use your own express router (express.Router()), you should use router.use
  app.use(vite.middlewares);

  // Serve index.html with Vite transformation
  app.get('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
      //    also applies HTML transforms from Vite plugins, e.g. global preambles
      //    from @vitejs/plugin-react
      template = await vite.transformIndexHtml(url, template);

      // 3. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
      }
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
