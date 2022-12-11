const express = require("express");
const shopController = require("../controller/shop-controller");
const router = express.Router();

router.get("/getProductsList", shopController.getProductsList);

router.post("/addProduct", shopController.addProduct);

router.post("/addToCart", shopController.addTocart);

router.post("/getCart", shopController.getCart);

router.get("/getProduct/:id", shopController.getProduct);


module.exports = router;
