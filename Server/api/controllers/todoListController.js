'use strict';

var tasks = require('../models/todoListModel');

exports.getAllTasks = function(req, res) {
  res.json(tasks.getAll());
};

exports.createTask = function(req, res) {
  res.json(tasks.create(req.body));
};

exports.getTask = function(req, res) {
  res.json(tasks.get(req.params.taskId));
};

exports.updateTask = function(req, res) {
   res.json(tasks.update(req.body));
};

exports.deleteTask = function(req, res) {
   res.json(tasks.delete(req.params.taskId));
};