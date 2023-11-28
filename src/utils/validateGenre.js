const AppError = require("./AppError");

function validateGenre(genre) {
  const genres = ["ação", "comédia", "drama", "terror", "ficção", "crime"];
  const genreIsIncluded = genres.includes(genre);
  if (!genreIsIncluded) {
    throw new AppError(
      `Genre must be one of these options: ${genres.join(", ")}`
    );
  }
}

module.exports = validateGenre;
