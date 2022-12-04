const express = require("express");
const shopController = require("../controller/shop-controller");
const router = express.Router();

router.post("/addProduct", shopController.addProduct);

router.post("/addToCart", shopController.addTocart);

router.post("/getCart", shopController.getCart);

module.exports = router;
