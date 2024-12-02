const { fetchProductById, fetchProductsByField,fetchProductSizes  } = require('./products_model');
const { renderProductPage } = require('./products-view');

async function getProduct(req, res, next) {
  try {
    const productId = +req.query.id;
    const product = await fetchProductById(productId);
    const productSizes = await fetchProductSizes(productId);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    const relatedProducts = await fetchProductsByField({
      field: 'category',
      value: product.category,
      excludeId: productId,
      limit: 4,

    });
    renderProductPage(res, product, relatedProducts, productSizes);
  } catch (error) {
    next(error);
  }
}

module.exports = { getProduct };