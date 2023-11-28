const AppError = require("./AppError");

function validateRating(rating) {
  if (Number(rating) > 5 || Number(rating) < 0 || isNaN(Number(rating))) {
    throw new AppError("Rating must be a number between 0 and 5");
  }
}

module.exports = validateRating;
