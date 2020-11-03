import { createSelector } from 'reselect';

const productDetailsSelector = (store) => store.Layout;

export default createSelector(
  productDetailsSelector,
  (layout) => ({
    ...layout
  })
);
