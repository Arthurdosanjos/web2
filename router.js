const express = require("express");
const router = express.Router();
const controller = require("./controllers/foodCard");

router.get("/", controller.renderFoodCard);

module.exports = router;
