const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const path = require('path');

const app = express();

// DO NOT EDIT ANYTHING ABOVE UNLESS YOU KNOW WHAT UR DOING!

app.use('/', createProxyMiddleware({
    target: 'https://github.com/', // Enter the url to proxy here, or just make other paths by copying the box.
    changeOrigin: true,
}));

// Disables sign up and login (uncomment to disable it)

// app.use('/signup', express.static(path.join(__dirname, 'static')))
// app.use('/login', express.static(path.join(__dirname, 'static')))

// DO NOT EDIT BELOW THIS LINE.

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
