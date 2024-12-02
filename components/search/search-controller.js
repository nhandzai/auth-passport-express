const { fetchAllProducts, fetchProducts, fetchFilterProducts } = require('./search-model')
const { renderSearchPage } = require('./search-view');
async function getSearch(req,res,next) {
    try {
        if (!req.query.q) {
          return res.redirect('/catalog');
        }
        const query = req.query.q;
        let products = await fetchProducts(query);
        if ( req.query.qf || req.query.minPrice || req.query.maxPrice){
            products = await getFilterProducts(req, res);
          }
        renderSearchPage(res, products);
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

      const searchQuery = req.query.q;

      const allProducts = await fetchProducts(searchQuery);

      const filteredProducts = await fetchFilterProducts(minPrice, maxPrice, queryArray);

      const filteredAndSearchedProducts = allProducts.filter(product =>
        filteredProducts.some(filteredProduct => filteredProduct.id === product.id)
      );

      return filteredAndSearchedProducts;
    } catch (error) {
      throw error;
    }
  }
module.exports = { getSearch, getFilterProducts };