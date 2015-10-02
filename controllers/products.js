var express = require('express');
var Products = require('../models/product');
var router = express.Router();

/* GET Products array */
router.get('/', function(req, res, next) {
  var products = Products.findAll();
  res.json({products: products});
});

/* GET Product by id */
router.get('/:id', function(req, res, next) {
  var product = Products.findById(req.params.id);
  res.json(product);
});

/* POST new Product */
router.post('/', function(req, res, next){
  console.log('router.post: req.body %j', req.body);
  var product = {name: req.body.name, price: req.body.price, stock: req.body.stock};
  product = Products.save(product);
  res.json(product);
});

/* PUT update Product */
router.put('/', function(req, res, next){
  console.log('router put: req.body %j', req.body);
  var product = {id: req.body.id, name: req.body.name, price: req.body.price, stock: req.body.stock};
  product = Products.save(product);
  res.json(product);
});

/* DELETE Product by id */
router.delete('/:id', function(req, res, next) {
  var id = Products.remove(req.params.id);
  res.json(id);
});

module.exports = router;
