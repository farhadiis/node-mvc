'use strict';

const loaders = require('./loaders');
const express = require('express');
const config = require('./config');

const app = express();
(async () => {
  try {
    console.log('App started...');
    await loaders(app);

    const server = app.listen(config.api.port, () => {
      const port = server.address().port;
      console.log('verbose', `Server listening on port: ${port}`);
    }).on('error', (err) => {
      console.log('error', 'Server start failed.', {
        err
      });
      process.exit(1);
    });

  } catch (e) {
    console.error(e);
  }
})();

process.on('unhandledRejection', (reason, p) => {
  console.log('error', 'Unhandled Rejection at Promise', {
    reason,
    p
  });
}).on('uncaughtException', (err) => {
  console.log('error', 'Uncaught Exception thrown', {
    err
  });
});
