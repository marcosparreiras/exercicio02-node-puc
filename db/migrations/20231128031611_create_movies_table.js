exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.uuid("id").primary();
    table.text("title").notNullable();
    table.integer("rating").notNullable();
    table.text("plot");
    table.enu("genre", [
      "ação",
      "comédia",
      "drama",
      "terror",
      "ficção",
      "crime",
    ]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("movies");
};
