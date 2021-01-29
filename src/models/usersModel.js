const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function UsersModel() {
  const userSchema = new Schema({
    fullName: String,
    age: Number,
  });

  return mongoose.model("users", userSchema);
};
