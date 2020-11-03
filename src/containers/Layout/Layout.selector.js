import { createSelector } from 'reselect';

const layoutSelector = (store) => store.Layout;

export default createSelector(
  layoutSelector,
  (layout) => ({
    ...layout
  })
);
