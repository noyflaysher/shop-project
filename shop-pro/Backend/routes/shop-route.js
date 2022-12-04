const express = require("express");
const shopController = require("../controller/shop-controller");
const router = express.Router();

router.post("/add", shopController.addTocart);

router.get("/get", shopController.getCart);

module.exports = router;
