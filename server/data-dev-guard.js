import { isDataPath } from './data-auth.js';

// Astro's development server does not execute Pages Functions. Block the route
// there instead of offering a second, unauthenticated view of the research.
export function dataDevGuard() {
  return {
    name: 'lumi-private-data',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = new URL(req.url, 'http://localhost').pathname;
        if (!isDataPath(path)) return next();
        res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
        res.end('This research page requires the protected Pages preview. Run npm run dev:data.');
      });
    },
  };
}
