require("express-async-errors");
const express = require("express");
const routes = require("./Routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

app.use(routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
