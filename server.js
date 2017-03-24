"use strict";

// Package dependancies
const express = require('express');

// Modules
const opt = require('./config.js');
const uPath = require('./modules/unique-path');

// Check if on a local environment
let local = process.env.NODE_ENV || true;;
let accessPort = local ? 3000 : process.env.PORT;

const server = express();

server.get("/", function (req, res) {
  let shortURL = `https://${req.headers.host}/${uPath(6)}`;
  res.send(shortURL);
});

var listener = server.listen(accessPort, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
