/**
 * A simple Product object
 * @param {Number} id         unique identifier
 * @param {String} name       name of Product
 * @param {Number} price      price of Product
 * @param {Number} stock      number of in-stock items
 */
var Product = function(id, name, price, stock) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.stock = stock;
};

module.exports = Product;
