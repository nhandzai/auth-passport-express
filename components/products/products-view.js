async function renderProductPage(res, product,relatedProducts,productSizes) {
  res.render('product', {
    title: 'Product Details',
    product: product,
    relatedProducts: relatedProducts,
    sizes: productSizes
  });
}

module.exports = { renderProductPage };