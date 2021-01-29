const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function MoviesModel() {
  const userSchema = new Schema({
    fullName: String,
    age: Number,
  });

  return mongoose.model("movies", userSchema);
};
