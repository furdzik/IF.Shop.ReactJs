import { createSelector } from 'reselect';

const productListSelector = (store) => store.ProductList;

export default createSelector(
  productListSelector,
  (productList) => ({
    ...productList
  })
);
