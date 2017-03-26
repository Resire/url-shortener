"use strict";

// Package dependancies
const express = require('express');

// Modules
const opt = require('./config.js');
const uPath = require('./modules/unique-path');

// Routes
const server = express();

server.get("/", function (req, res) {
  let shortURL = `${opt.host}/${uPath(6)}`;
  res.send(shortURL);
});

// Listener
const listener = server.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
