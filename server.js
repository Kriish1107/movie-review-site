// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     // Check if the request is for the root URL
//     if (req.url === '/') {
//         // Read the index.html file
//         fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//             if (err) {
//                 // If there's an error reading the file, send a 500 response
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Internal Server Error');
//             } else {
//                 // Otherwise, send the contents of the index.html file
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     } else {
//         // If the request is for any other URL, send a 404 response
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 Not Found');
//     }
// });

// const PORT = process.env.PORT || 3000; // Use the environment port or default to 3000
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000; // Port number for the server

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route for serving the HTML files
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'login.html'));
// });

// app.get('/shop.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });


// // Start the server
// app.listen(PORT, () => {
//     console.log(Server is running on port ${PORT});
// });