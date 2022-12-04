const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, required: true, minlength: 7 },
  shoppingCart: [
    {
      product: { type: mongoose.Types.ObjectId, required: true, ref: "Shop" },
    },
    {
      amount: { type: Number, require: true },
    },
  ],
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
