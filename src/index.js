require('dotenv').config()
const express = require('express');

const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.SERVER_PORT || 4000);

//permisos
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", process.env.URI_BACKEND);
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        'X-Requested-With, Authorization, Content-Type, Content-Length'
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

// Routes
app.use(require('./routes/image.routes'));

// Static files
app.use("/upload", express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});