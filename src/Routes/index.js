const { Router } = require("express");
const moviesRoutes = require("./movies.routes");

const routes = Router();

routes.use("/movies", moviesRoutes);

routes.get("/", (_req, res) => {
  return res.status(200).json({ message: "Welcome to movie api" });
});

routes.use((_req, res) => {
  return res.status(404).json({ status: "error", message: "Not found" });
});

module.exports = routes;
