var express = require("express");
var api = express.Router();
var ctrl = require("./controller");

module.exports = function mountApiRoutes(app) {
  app.use("/api", api);
}


api.get("/items", (req, res) => {
  ctrl.getItems(req, res);
});
api.post("/items", (req, res) => {
  ctrl.addNewItem(req, res);
});
