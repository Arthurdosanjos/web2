const Food = require("../models/Food");

const foodArray = [
  new Food("French Fries", "R$ 6.00", "312 cal"),
  new Food("Abbacchio", "R$ 44.99", "444 cal"),
  new Food("Caesar Salad", "R$ 7.95", "44 cal"),
  new Food("Panna Cotta", "R$ 25.00", "708 cal"),
  new Food("Macchiato", "R$ 5.00", "140 cal"),
];

exports.renderFoodCard = (require, response) => {

  response.render("index", {
    foods: foodArray
  });
}
