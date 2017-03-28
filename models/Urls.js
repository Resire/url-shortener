"use strict";

// Package Dependancies
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  original_url: String,
  unique-path: String
});

const Url = mongoose.model('Url', schema);

exports.newUrl = (url, uPath) => {
  const url = new Url({
    original_url: url,
    unique-path: uPath
  });

  url.save((err) => {
    if (err) return err;
  });
};
