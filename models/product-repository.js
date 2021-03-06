var products = [];
var nextId = 1;

/**
 * Find a Product by its id
 * Param: id of the Product to find
 * Returns: the Product having the given id
 */
var findById = function(id) {
  var product = products.filter(function(item) {
    return item.id == parseInt(id, 10);
  })[0];
  if (null === product) {
    throw new Error('Product not found');
  }
  return product;
};

 /**
 * Find a Product's index in the storage array by its id
 * Param: id the of the Product to find
 * Returns: the index of the Product in the storage array
 */
var findIndexById = function(id) {
  var index = null;
  products.forEach(function(item, key) {
    if (item.id === parseInt(id, 10)) {
      index = key;
    }
  });
  if (null === index) {
    throw new Error('Product not found');
  }
  return index;
};

/**
 * Get all Products
 * Returns: an array of Products
 */
var findAll = function() {
  return products;
};

/**
 * Save a Product
 * Param: the Product to save
 */
var save = function(product) {
  if (product.id === undefined || product.id === null || product.id === 0) {
    product.id = nextId;
    products.push(product);
    nextId++;
  } else {
    var index = findIndexById(product.id);
    products[index] = product;
  }
  return product;
};

/**
 * Delete a Product
 * Param: id the of the Product to delete
 */
var remove = function(id) {
  var index = findIndexById(id);
  products.splice(index, 1);
  return id;
};

module.exports = {
  findById : findById,
  findAll : findAll,
  save: save,
  remove: remove
};
