const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Check the URL of the request
    if (req.url === '/healthcheck') {
        // Health check endpoint
        res.statusCode = 200;  // Indicating that the server is healthy
        res.setHeader('Content-Type', 'text/plain');
        res.end('OK\n');
    } else {
        // Default response for other routes (like the root "/")
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

