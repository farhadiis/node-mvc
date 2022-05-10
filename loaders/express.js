'use strict';

const routes = require('../api');
const config = require('../config');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });
  app.enable('trust proxy');

  app.use(cors());

  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      success: false,
      message: err.message,
      data: null
    });
    next();
  });
};