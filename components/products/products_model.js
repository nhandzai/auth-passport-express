const db = require('../../library/models');
const { searchProductsByField }  = require('../../library/search');
async function fetchProductById(productId) {
  return await db.products.findByPk(productId);
}
async function fetchProductsByField({ field, value, excludeId, limit }) {
  return await searchProductsByField({ field, value, excludeId, limit });
}
async function fetchProductSizes(productId) {
  return await db.productSizes.findAll({
    where: {
      productId,
    },
  });
}

module.exports = { fetchProductById,fetchProductsByField, fetchProductSizes };