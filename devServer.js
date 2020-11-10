const bodyParser = require("body-parser");
const cache = require("express-cache-headers");
// const { } = require("./webpackData.js");

const About = require("./about.js");

const devServer = (app, server) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  /* About */

  app.get("/about", cache({nocache:true}), async (req, res) => {
    return res.status(200).send(await About.toHTML());
  });
};

module.exports = devServer;
