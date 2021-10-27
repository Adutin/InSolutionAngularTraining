'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  app.route('/api/tasks')
    .get(todoList.getAllTasks)
    .post(todoList.createTask);

  app.route('/api/tasks/:taskId')
    .get(todoList.getTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask);
};