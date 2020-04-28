const devServer = (app, server) => {
  app.get("/about", (req, res) => {
    res.status(200).json("The Dev Server");
  });
};

module.exports = devServer;
