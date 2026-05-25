// @ts-nocheck
import server from "../dist/server/server.js";

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = new URL(req.url || '/', `${protocol}://${host}`);
    
    const headers = new Headers();
    for (const key in req.headers) {
      if (req.headers[key] !== undefined) {
        if (Array.isArray(req.headers[key])) {
          req.headers[key].forEach(v => headers.append(key, v));
        } else {
          headers.set(key, req.headers[key]);
        }
      }
    }

    let body = undefined;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = await new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
      });
    }

    const request = new Request(url.href, {
      method: req.method,
      headers,
      body,
    });

    const response = await server.fetch(request, {}, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
      res.end();
    } else {
      res.end();
    }
  } catch (error) {
    console.error("Error in SSR node function:", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
