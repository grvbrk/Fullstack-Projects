async function getAllTodos(req, res) {
  return res.json({ msg: "Get All Todos" });
}
async function postOneTodo(req, res) {
  const todo = req.body;
  return res.json({ msg: "Post One Todo", todo });
}
async function getOneTodo(req, res) {
  const { id: TodoId } = req.params;
  return res.json({ msg: "Get One Todo", TodoId });
}

async function patchOneTodo(req, res) {
  const { id: TodoId } = req.params;
  return res.json({ msg: "Patch One Todo", TodoId });
}

async function deleteOneTodo(req, res) {
  const { id: TodoId } = req.params;
  return res.json({ msg: "Delete One Todo", TodoId });
}

module.exports = {
  getAllTodos,
  postOneTodo,
  getOneTodo,
  patchOneTodo,
  deleteOneTodo,
};
