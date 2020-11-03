import { createSelector } from 'reselect';

const productDetailsSelector = (store) => store.ProductDetails;

export default createSelector(
  productDetailsSelector,
  (productDetails) => ({
    ...productDetails
  })
);
