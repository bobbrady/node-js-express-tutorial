var express = require('express');
var ProductRepo = require('../models/product-repository');
var Product = require('../models/product');
var productController = express.Router();

/* GET Products array */
productController.get('/', function(req, res, next) {
  var products = ProductRepo.findAll();
  res.json({products: products});
});

/* GET Product by id */
productController.get('/:id', function(req, res, next) {
  var product = ProductRepo.findById(req.params.id);
  res.json(product);
});

/* POST new Product */
productController.post('/', function(req, res, next){
  console.log('productController.post: req.body %j', req.body);
  var product = new Product(null, req.body.name, req.body.price, req.body.stock);
  product = ProductRepo.save(product);
  res.json(product);
});

/* PUT update Product */
productController.put('/', function(req, res, next){
  console.log('productController put: req.body %j', req.body);
  var product = new Product(req.body.id, req.body.name, req.body.price, req.body.stock);
  product = ProductRepo.save(product);
  res.json(product);
});

/* DELETE Product by id */
productController.delete('/:id', function(req, res, next) {
  var id = ProductRepo.remove(req.params.id);
  res.json(id);
});

module.exports = productController;
