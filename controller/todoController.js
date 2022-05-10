'use strict';

const TodoService = require('../services/todoService');

const Container = require('typedi').Container;
const todoService = Container.get(TodoService);
const _ = require('lodash');

class TodoController {

  async allTodo(req, res, next) {
    try {
      const result = await todoService.allTodo();
      res.send(result);
    } catch (e) {
      next(e);
    }
  }

  async getTodo(req, res, next) {
    try {
      const id = _.get(req, 'params.id', 0);
      if (id <= 0) {
        const err = new Error('id is not valid.');
        err.status = 400;
        throw err;
      }
      const result = await todoService.getTodo(id);
      res.send(result);
    } catch (e) {
      next(e);
    }
  }

}

module.exports = TodoController;