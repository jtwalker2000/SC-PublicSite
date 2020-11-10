const middleware = (app, server, compiler) => {
  const cache = require("express-cache-headers");
  const bodyParser = require("body-parser");

  app.use(cache(10));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};

module.exports = middleware;
