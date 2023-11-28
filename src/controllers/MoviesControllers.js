const { randomUUID } = require("node:crypto");
const AppError = require("../utils/AppError");
const knex = require("../database");
const validateRequestBody = require("../utils/validateRequestBody");
const validateGenre = require("../utils/validateGenre");
const validateRating = require("../utils/validateRating");

class MoviesControllers {
  // @GET /movies
  async index(_req, res) {
    const movies = await knex("movies").select("*");
    return res.status(200).json({ total: movies.length, movies });
  }

  // @GET /movies/:id
  async show(req, res) {
    const { id } = req.params;
    const movie = await knex("movies").select("*").where("id", id).first();
    if (!movie) {
      throw new AppError("Movie not found");
    }
    return res.status(200).json({ movie });
  }

  // @POST /movies
  async create(req, res) {
    const requestdBodyParams = ["title", "rating", "plot", "genre"];
    const { title, rating, plot, genre } = validateRequestBody(
      req,
      requestdBodyParams
    );

    validateRating(rating);
    validateGenre(genre);

    const id = randomUUID();
    const [new_movie] = await knex("movies")
      .insert({
        id,
        title,
        rating: Math.round(rating),
        plot,
        genre,
      })
      .returning("*");

    return res.status(201).json({ status: "success", new_movie });
  }

  // @PUT /movies/:id
  async update(req, res) {
    const { id } = req.params;

    const requestdBodyParams = ["title", "rating", "plot", "genre"];
    const { title, rating, plot, genre } = validateRequestBody(
      req,
      requestdBodyParams
    );

    validateRating(rating);
    validateGenre(genre);

    const [updated_movie] = await knex("movies")
      .update({ title, rating, plot, genre })
      .where("id", id)
      .returning("*");

    if (!updated_movie) {
      throw new AppError("Movie not found");
    }

    return res.status(202).json({ status: "success", updated_movie });
  }

  // @DELETE /movies/:id
  async delete(req, res) {
    const { id } = req.params;

    const knexResponse = await knex("movies").delete().where("id", id);
    if (!knexResponse) {
      throw new AppError("Movie not found");
    }

    return res.status(204).json();
  }
}

module.exports = MoviesControllers;
