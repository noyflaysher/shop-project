const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  userName: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, required: true, minlength: 7 },
  shoppingCart: [{ type: String, require: true }],
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
