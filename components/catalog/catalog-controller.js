const { fetchAllProducts, fetchProducts, fetchFilterProducts } = require('./catalog-model');
const { renderCatalogPage } = require('./catalog-view');

async function getCatalog(req, res, next) {
  try {
    let products = await fetchAllProducts();
    if ( req.query.qf || req.query.minPrice || req.query.maxPrice){
      console.log(req.query.qf, req.query.minPrice, req.query.maxPrice);
      products = await getFilterProducts(req, res);
    }
  
  
    renderCatalogPage(res, products);
  } catch (error) {
    next(error);
  }
}



async function getFilterProducts(req, res) {
  try {
    const queries = req.query.qf || [];

    let minPrice = req.query.minPrice ? parseFloat(req.query.minPrice) : 0;
    let maxPrice = req.query.maxPrice ? parseFloat(req.query.maxPrice) : 99999;

    if (isNaN(minPrice)) {
      minPrice = 0;
    }
    if (isNaN(maxPrice)) {
      maxPrice = 99999;
    }
    const queryArray = Array.isArray(queries) ? queries : [queries];

    const products = await fetchFilterProducts(minPrice, maxPrice, queryArray);
    return products;
  } catch (error) {
    throw error;
  }
}



module.exports = { getCatalog, getFilterProducts };