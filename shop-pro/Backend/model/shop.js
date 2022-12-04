const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const shopSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: [{ type: String, required: true }],
  stores: [{ type: String, required: true }],
});
shopSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Shop", shopSchema);
