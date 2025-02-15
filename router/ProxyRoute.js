import * as Data from "../Data/index.js";
import express from "express";
import { createProxyMiddleware } from 'http-proxy-middleware';

const ProxyRoute = express.Router();

// Middleware to handle large request bodies
ProxyRoute.use(express.json({ limit: '10mb' }));
ProxyRoute.use(express.urlencoded({ extended: true, limit: '10mb' }));

const createProxy = (targetUrl) => {
    return createProxyMiddleware({
        target: targetUrl,
        changeOrigin: true,
        pathRewrite: {
            '^/api/file-system': ''
        },
        timeout: 10000, // Set a timeout for proxy requests (10 seconds)
        onProxyRes: (proxyRes, req, res) => {
            console.log('Response from proxy:', proxyRes.statusCode);
        },

        onProxyReq: (proxyReq, req, res) => {
            console.log('Requesting through proxy:', req.originalUrl);
            if (req.headers['content-type']) {
                proxyReq.setHeader('Content-Type', req.headers['content-type']);
            }
            if (req.body) {
                console.log('Request Body:', req.body);
            } else {
                console.log('No request body found.');
            }
        },

        onError: (err, req, res) => {
            console.error('Error during proxy request:', err);
            res.status(500).send({ message: 'Proxy error', error: err.message });
        }
    });
};

// GET Route
ProxyRoute.get('/api/file-system', (req, res, next) => {
    const backendPort = Data.get_backend_port();  
    if (!backendPort) {
        return res.status(500).send("Backend port is not configured correctly");
    }
    const backendURL = `http://127.0.0.1:${backendPort}/api/file-system`;
    console.log("Proxying to backend URL:", backendURL);
    createProxy(backendURL)(req, res, next);
});

// POST Route
ProxyRoute.post('/api/file-system/folder', express.json(), (req, res, next) => {
    const backendPort = Data.get_backend_port();
    if (!backendPort) {
        return res.status(500).send("Backend port is not configured correctly");
    }
    const backendURL = `http://127.0.0.1:${backendPort}/api/file-system/folder`;
    console.log("Proxying to backend URL:", backendURL);
    createProxy(backendURL)(req, res, next);
});

export default ProxyRoute;
