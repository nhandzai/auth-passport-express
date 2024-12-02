async function renderSearchPage(res, products) {
    res.render('catalog', {
      title: 'Search',
      products: products,
    });
  }
  module.exports = { renderSearchPage };