import { createSelector } from 'reselect';

const productListSelector = (store) => store.Layout;

export default createSelector(
  productListSelector,
  (layout) => ({
    ...layout
  })
);
