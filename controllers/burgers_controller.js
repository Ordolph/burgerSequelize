// Dependancies
const express = require('express');
const router = express.Router();
const db = require('../models');
// Gets all necessary data from db on page load
router.get("/", function (req, res) {
  db.Burger.findAll({}).then(function (dbBurger) {
    var hbsObject = {
      burgers: dbBurger
    };
    res.render("index", hbsObject);
  });
});
// Adds new burger to db when submit button is pushed
router.post("/", function (req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(result => {
    res.json({
      id: result.insertId
    });
  });
});
// Updates burger to "devoured: true" when devour button is pushed
router.put("/", function (req, res) {
  let id = req.body.id;
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: id
    }
  }).then(result => {
    res.json({
      id: result.insertId
    });
  });
});
// Deletes devoured burger when delete button is pushed
router.delete("/", function (req, res) {
  db.Burger.destroy({
    where: {
      id: req.body.id
    }
  }).then(result => {
    res.json({
      id: result.insertId
    });
  });
});
// Exports to other files
module.exports = router;