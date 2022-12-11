const HttpError = require("../model/httpError");
const Shop = require("../model/shop");
const User = require("../model/user");

const getProductsList = async (req, res, next) => {
  let products;
  try {
    products = await Shop.find({});
  } catch (err) {
    const error = new HttpError(
      "Fetching products failed, please try again later",
      500
    );
    return next(error);
  }
  res.json({ products: products.map((product) => product.toObject({ getters: true })) });
  }

const addProduct = async (req, res, next) => {
  const { title, price, description, images, stores } = req.body;

  const createShop = new Shop({
    title,
    price,
    description,
    images,
    stores,
  });

  try {
    await createShop.save();
  } catch (err) {
    const error = new HttpError(
      "creating product failed, please try again",
      500
    );
    return next(error);
  }

  res.status(201).json({ product: createShop.toObject({ getters: true }) });
};

const addTocart = async (req, res, next) => {
  const { email, title } = req.body;
  let product;
  try {
    product = await Shop.findOne({ title: title }).populate("title");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, cannot add to cart",
      500
    );
    return next(error);
  }

  let user;
  try {
    user = await User.findOne({ email: email }).populate("shoppingCart");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, cannot add to cart",
      500
    );
    return next(error);
  }

  if (!product || !user) {
    const error = new HttpError("adding to cart failed, please try again", 404);
    return next(error);
  }
  let flag = false;
  let productArr;
  for (let i = 0; i < user.shoppingCart.length; i++) {
    if (user.shoppingCart[i].product._id.toString() == product.id) {
      flag = true;
      user.shoppingCart[i].amount++;
      productArr = user.shoppingCart;
      try {
        await user.update({ shoppingCart: productArr });
      } catch (err) {
        const error = new HttpError(
          "Creating recipe failed, please try again 3",
          500
        );
        return next(error);
      }
      break;
    }
  }

  try {
    if (!flag) {
      const ob = { product: product, amount: 1 };
      user.shoppingCart.push(ob);
      productArr = user.shoppingCart;
      await user.update({ shoppingCart: productArr });
    }
  } catch (err) {
    const error = new HttpError(
      "Creating recipe failed, please try again 3",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "add product" });
};

const getCart = async (req, res, next) => {
  const { email } = req.body;
  let user;
  try {
    user = await User.findOne({ email: email }).populate("shoppingCart");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a cart.",
      500
    );
    return next(error);
  }

  if (!user || user.shoppingCart === null) {
    res.status(404).send("Could not find products.");
    return;
  }
  const productArr = user.shoppingCart;

  res.json({ productArr });
};

exports.addTocart = addTocart;
exports.getCart = getCart;
exports.addProduct = addProduct;
exports.getProductsList=getProductsList;
