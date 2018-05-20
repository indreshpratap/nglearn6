var db = require("./db");

module.exports = {
  getItems: getItems,
  addNewItem: addNewItem
}


function getItems(req, res) {
  db.items.find({
    active: true
  }, (err, data) => {
    res.json(data);
  });
}

function addNewItem(req, res) {
  let item = req.body;
  item.active = true;
  item.createdDate = new Date();

  db.items.insert(item, (err, data) => {
    if (err) {
      res.json({
        status: false
      });
    } else {
      res.json({
        status: true,
        data: data
      });

    }
  })
}
