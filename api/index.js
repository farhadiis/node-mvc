'use strict';

const express = require('express');
const todo = require('./routes/todo');

module.exports = () => {
  const app = express.Router();
  todo(app);
  return app;
};