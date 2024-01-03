const { todoModel } = require("../db/connect");

async function getAllTodos(req, res) {
  const todos = await todoModel.find({})
  return res.json({ msg:"Success", todos });
}
async function postOneTodo(req, res) {
  const todo = req.body;
  await todoModel.create(todo)
  return res.json({ msg: "Success", todo });
}
async function getOneTodo(req, res) {
  const { id: todoId } = req.params;
  console.log(todoId)
  const todo = await todoModel.find({_id: todoId})
  return res.json({ msg: "success", todo });
}

async function patchOneTodo(req, res) {
  const { id: todoId } = req.params;
  const updatedTodo = req.body
  const todo = await todoModel.findByIdAndUpdate({_id: todoId}, updatedTodo, {
    runValidators: true,
    new: true
  })
  return res.json({ msg: "success", todo });
}

async function deleteOneTodo(req, res) {
  const { id: todoId } = req.params;
  const todo = await todoModel.findByIdAndDelete({_id: todoId})
  return res.json({ msg: "success", todo });
}

module.exports = {
  getAllTodos,
  postOneTodo,
  getOneTodo,
  patchOneTodo,
  deleteOneTodo,
};
