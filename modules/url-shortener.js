"use strict";

// Package dependancies
const mongoose = require('mongoose');

// Modules
const uPath = require('./unique-path');

const checkURL = (url) => {
  // RegExp from http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without
  const pattern = new RegExp(
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
  );

  return pattern.test(url)
};

exports.shorten = (url, host) => {
  const result = {};
  const json = {};

  if (checkURL(url)) {
    result.path = uPath(6);
    json.original_url =  url;
    json.short_url = `${host}/${result.path}`;
  }
  else {
    result.error = `${url} is not a valid URL`
  }

  result.json = json;

  return  result;
};

module.exports = exports;
