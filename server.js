"use strict";

// Package Dependancies
const express = require('express');
const mongoose = require('mongoose');

// Modules
const opt = require('./config.js');
const uPath = require('./modules/unique-path');

// Initiate Server
const server = express();

// Database Connection
mongoose.connect(`mongodb://${opt.db.user}:${opt.db.password}@ds141950.mlab.com:41950/url_shortener`);

// Routes
server.get("/", function (req, res) {
  let short = shortURL.shorten('https://google.com', opt.host);
  res.json(short);
});

// Listener
const listener = server.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
