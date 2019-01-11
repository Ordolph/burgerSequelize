const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
})

router.post("/", function (req, res) {
  burger.create([req.body.burger_name], function(result){
    res.json({ id: result.insertId});
  });  
});

router.put("/", function (req, res){
  burger.update(req.body.id, function (result) {
    res.json({ id: result.insertId});
  });
});

router.delete("/", function (req, res){
  burger.delete(req.body.id, function (result){
    res.json({ id: result.insertId});
  });
});

module.exports = router;