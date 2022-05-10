const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

router.get("/product-detail", controller.productDetail);

module.exports = router;
