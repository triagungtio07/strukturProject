const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function ReviewsModel() {
  const userSchema = new Schema({
    fullName: String,
    age: Number,
  });

  return mongoose.model("reviews", userSchema);
};
