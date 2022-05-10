'use strict';

const TodoController = require('../../controller/todoController');
const express = require('express');
const route = express.Router();
const Container = require('typedi').Container;
const todoController = Container.get(TodoController);

module.exports = (app) => {
  app.use('/todo', route);
  route.get('/', todoController.allTodo);
  route.get('/:id', todoController.getTodo);
};