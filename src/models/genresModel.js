const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function GenresModel() {
  const userSchema = new Schema({
    fullName: String,
    age: Number,
  });

  return mongoose.model("genres", userSchema);
};
