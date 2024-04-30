const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const fs = require('fs');
const path = require('path');

const app = express();


app.use('/', createProxyMiddleware({
    target: 'https://github.com/',
    changeOrigin: true,
}));

app.use('/signup', express.static(path.join(__dirname, 'static')))
app.use('/login', express.static(path.join(__dirname, 'static')))



app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
