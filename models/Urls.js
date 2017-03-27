"use strict";

// Package Dependancies
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  original_url: String,
  unique-path: String
});

const Url = mongoose.model('Url', schema);
