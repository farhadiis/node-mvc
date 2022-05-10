'use strict';

const axios = require('axios');
const _ = require('lodash-contrib');

class TodoService {

  async allTodo() {
   try {
     const result = await axios.get('https://gorest.co.in/public/v1/todos');
     //  TODO: check result;
     let arr = _.get(result.data, 'data', []);
     arr = arr.map((i) => {
       return _.renameKeys(i, {
         user_id: "userId",
         title: "name"
       });
     });
     result.data = arr;
     return result.data;
   } catch (e) {
     console.log(e);
     const err = new Error('todo service not available');
     err.status = 400;
     throw err;
   }
  }

  async getTodo(id) {
   try {
     const result = await axios.get('https://gorest.co.in/public/v1/todos/' + id);
     //  TODO: check result;
     return result.data;
   } catch (e) {
     console.log(e);
     const err = new Error('todo service not available');
     err.status = 400;
     throw err;
   }
  }

}

module.exports = TodoService;