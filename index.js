const express = require('express');
const app = express();

// local env
require('dotenv').config('.env' );

// body parser
app.use(express.json({extended: false}));

// ROUTES
const albumRoute = require('./routes/albumRoute.js');

app.use(albumRoute);

// 404 route
app.get('*', function(req, res) {
  res.status(404).json({status: 'Failure', error: 'Endpoint not found!'});
});

module.exports = {app};

