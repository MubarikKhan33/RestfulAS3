const express = require('express');
const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct
} = require("../controller/productController");

const retailerRoute = express.Router();

retailerRoute.route('/').get(getRetailers).post(createRetailer);
retailerRoute.route('/:id').get(getRetailer).put(updateRetailer).delete(deleteRetailer);

module.exports = retailerRoute;
