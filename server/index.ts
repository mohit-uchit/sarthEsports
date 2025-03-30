import express, { type Request, Response, NextFunction } from 'express';
import { registerRoutes } from './routes';
import path from 'path';
import { setupVite, log } from './vite';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use((req, res, next) => {
  const start = Date.now();
  const requestPath = req.path; // ✅ Fixed variable name

  let capturedJsonResponse: Record<string, any> | undefined = undefined;
  const originalResJson = res.json;

  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (requestPath.startsWith('/api')) {
      let logLine = `${req.method} ${requestPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + '…';
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Global Error Handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).json({ message });
    throw err;
  });

  // ✅ Serve Frontend Correctly in Production
  if (app.get('env') === 'production') {
    const frontendPath = path.resolve(__dirname, '..', 'client', 'dist'); // ✅ Ensure correct path
    app.use(express.static(frontendPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.join(frontendPath, 'index.html'));
    });
  } else {
    const frontendPath = path.resolve(__dirname, '..', 'dist'); // ✅ Ensuring correct path
    app.use(express.static(frontendPath));

    app.get('*', (_req, res) => {
      res.sendFile(path.join(frontendPath, 'index.html'));
    });
  }

  // ✅ Always serve the app on port 5000
  const port = 5000;
  server.listen(
    {
      port,
      host: '0.0.0.0',
      reusePort: true,
    },
    () => {
      log(`✅ Server running on http://localhost:${port}`);
    },
  );
})();
