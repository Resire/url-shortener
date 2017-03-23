"use strict";

// Return a random character from 0-9, A-Z, or a-z
const randChara = () => {
  const num = Math.round(Math.random() * 124) + 48;
  
  switch (true) {
    case (num > 47 && num < 58):
    case (num > 64 && num < 91):
    case (num > 97 && num < 123):
      return String.fromCharCode(num);
    default:
      return randChara();
  };
};

// Return a string of random 
const createUniquePath = (length) => {
  let uPath = '';
  
  for(let i = 0; i < length; i++) {
    uPath += randChara();
  }
  return uPath;
};

module.exports = exports = createUniquePath;