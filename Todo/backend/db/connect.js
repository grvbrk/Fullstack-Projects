const mongoose = require("mongoose");

// single function to connect to mongodDB Database
function connectToDB(url) {
  return mongoose.connect(url);
}

// List of schemas
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxlength: [20, "Title can not be more than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "Must provide name"],
    maxlength: [20, "Title can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false
  }
});

//List of models
const todoModel = mongoose.model("Todo", todoSchema)

module.exports = { connectToDB, todoModel };
