const express = require("express");
const {
  getAllTodos,
  postOneTodo,
  getOneTodo,
  patchOneTodo,
  deleteOneTodo,
} = require("../Controllers/Todos");
const TodoRouter = express.Router();

TodoRouter.route("/todos").get(getAllTodos).post(postOneTodo);
TodoRouter.route("/todos/:id")
  .get(getOneTodo)
  .patch(patchOneTodo)
  .delete(deleteOneTodo);

module.exports = { TodoRouter };
