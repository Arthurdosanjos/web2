const Food = require("../models/Food");

const foodArray = [
  new Food("French Fries", "R$ 6.00", "312 cal","frenchfries.jpeg"),
  new Food("Abbacchio", "R$ 44.99", "444 cal","frenchfries.jpeg"),
  new Food("Caesar Salad", "R$ 7.95", "44 cal","frenchfries.jpeg"),
  new Food("Panna Cotta", "R$ 25.00", "708 cal","frenchfries.jpeg"),
  new Food("Macchiato", "R$ 5.00", "140 cal","frenchfries.jpeg"),
  new Food("Macchiato", "R$ 5.00", "140 cal","frenchfries.jpeg"),
  new Food("Macchiato", "R$ 5.00", "140 cal","frenchfries.jpeg"),
  new Food("Macchiato", "R$ 5.00", "140 cal","frenchfries.jpeg"),
  new Food("Macchiato", "R$ 5.00", "140 cal","frenchfries.jpeg"),
  new Food("Macchiato", "R$ 5.00", "140 cal","frenchfries.jpeg"),
];

exports.renderFoodCard = (require, response) => {

  response.render("index", {
    foods: foodArray
  });
}
