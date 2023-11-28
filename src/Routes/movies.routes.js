const { Router } = require("express");
const MoviesControllers = require("../controllers/MoviesControllers");

const moviesRoutes = Router();
const moviesControllers = new MoviesControllers();

moviesRoutes.get("/", moviesControllers.index);
moviesRoutes.get("/:id", moviesControllers.show);
moviesRoutes.post("/", moviesControllers.create);
moviesRoutes.put("/:id", moviesControllers.update);
moviesRoutes.delete("/:id", moviesControllers.delete);

module.exports = moviesRoutes;
