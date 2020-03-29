const Food = require("../models/Food");

const foodArray = [
od("Macchiato", "R$ 5.00", "140 cal","frenchfries.jpeg"),
  new Food("French Fries", "R$ 6.00", "312 kcal", "imagens/French-Fries.jpg"),
  new Food("Abbacchio", "R$ 44.99", "444 kcal", "imagens/Abbacchio.jpg"),
  new Food("Caesar Salad", "R$ 7.95", "44 kcal", "imagens/Caesar-Salad.jpg"),
  new Food("Panna Cotta", "R$ 25.00", "708 kcal", "imagens/Panna-Cotta.jpg"),
  new Food("Macchiato", "R$ 5.00", "140 kcal", "imagens/Macchiato.jpg"),
];

exports.renderFoodCard = (require, response) => {

  response.render("index", {
    foods: foodArray
  });
}
