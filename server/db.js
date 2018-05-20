var Datastore = require("nedb");
var path = require("path");
var db = {
  items: new Datastore({
    filename: path.join(__dirname + "/db/items.db"),
    autoload: true
  }),
  orders: new Datastore({
    filename: path.join(__dirname + "/db/orders.db"),
    autoload: true
  }),
  users: new Datastore({
    filename: path.join(__dirname + "/db/users.db"),
    autoload: true
  }),
};

module.exports = db;
