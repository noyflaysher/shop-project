const HttpError = require("../model/httpError");
const User = require("../model/user");
const Shop = require("../model/shop");

const checkout = async (req, res, next) => {
  const { email, userName, shoppintCart } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Signing up failed ", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exists already, please login instead",
      422
    );
    return next(error);
  }

  let product;
  let cart = [];
  let pid;
  try {
    for (let i = 0; i < shoppintCart.length; i++) {
      pid = shoppintCart[i].id;
      product = await Shop.findById(pid).populate("title");
      cart.push({
        product: product,
        title: product.title,
        amount: shoppintCart[i].amount,
      });

      console.log(cart);
    }
  } catch (err) {}

  const createdUser = new User({
    email,
    userName,
    shoppingCart: cart,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("add user failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ message: "add to basket" });
};

exports.checkout = checkout;
