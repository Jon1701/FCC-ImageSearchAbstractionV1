////////////////////////////////////////////////////////////////////////////////
// ExpressJS dependencies.
////////////////////////////////////////////////////////////////////////////////
var express = require('express');
var app = express();
var path = require('path');

// Requests (SuperAgent)
var request = require('superagent');

// Library to connect to a mongodb instance.
//var MongoClient = require('mongodb').MongoClient;

// MongoDB options.
var MONGO = {
  host: process.env['MONGO_HOST'] || 'localhost',
  port: process.env['MONGO_PORT'] || '27017',
  database: 'ms-image-search-abstraction',
  collection: 'recent',
  credentials: {
    username: 'APP_MS_IMAGE_SEARCH_ABSTRACTION',
    password: process.env['APP_MS_IMAGE_SEARCH_ABSTRACTION']
  }
}


////////////////////////////////////////////////////////////////////////////////
// Serve files from the ./dist folder.
////////////////////////////////////////////////////////////////////////////////
app.use(express.static('dist'));

////////////////////////////////////////////////////////////////////////////////
// Handles search query from client.
////////////////////////////////////////////////////////////////////////////////
app.get('/search', function(req, res) {

  // HTTP GET request to Imgur.
  request('GET', 'https://api.imgur.com/3/gallery/search/')
    .set('Authorization', 'Client-ID ' + process.env.CLIENT_ID)
    .query({q: req.query.query})
    .end(function(err, res) {
      console.log(res)
    })
});

////////////////////////////////////////////////////////////////////////////////
// Route to handle errors.
////////////////////////////////////////////////////////////////////////////////
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

////////////////////////////////////////////////////////////////////////////////
// Server listening for connections.
////////////////////////////////////////////////////////////////////////////////
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Listening for connections on PORT ' + port);
});
