import { combineReducers } from 'redux';

import Layout from '@containers/Layout/Layout.reducer';
import ProductList from '@containers/ProductList/ProductList.reducer';
import ProductDetails from '@containers/ProductDetails/ProductDetails.reducer';

export default combineReducers({
  Layout,
  ProductList,
  ProductDetails
});
