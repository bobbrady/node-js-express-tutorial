var express = require('express');
var Products = require('../models/product');
var router = express.Router();

/* GET Products listing. */
router.get('/', function(req, res, next) {
  var products = Products.findAll();
  res.json({products: products});
});

module.exports = router;
