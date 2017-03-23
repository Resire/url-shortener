"use strict";

const express = require('express');
const uPath = require('./modules/unique-path');

const app = express();

app.get("/", function (req, res) {
  let shortURL = `https://${req.headers.host}/${uPath(6)}`;
  
  res.send(shortURL);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
