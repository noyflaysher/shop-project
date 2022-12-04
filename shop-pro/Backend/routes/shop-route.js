const express = require("express");
const shopController = require("../controller/shop-controller");
const router = express.Router();

router.post("/signup", shopController.signup);

router.post("/login", shopController.login);

router.post("/add", shopController.addToShooping);

router.get("/get", shopController.getShopping);

module.exports = router;
