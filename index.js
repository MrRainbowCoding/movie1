const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const path = require('path');

const app = express();


app.use('/', createProxyMiddleware({
    target: 'https://github.com/',
    changeOrigin: true,
}));

app.use('/signup', express.static(path.join(__dirname, 'static', 'signup.html')))
app.use('/login', express.static(path.join(__dirname, 'static', 'login.html')))


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
