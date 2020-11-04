import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductListComponent from '@components/ProductList';
import Loader from '@components/ui/Loader';

import { getList } from './ProductList.reducer';
import selector from './ProductList.selector';

const ProductList = (props) => {
  useEffect(() => {
    props.getProductList();
  }, []);

  return !props.loading ? (
    <ProductListComponent list={props.list} />
  ) : <Loader covered />;
};

ProductList.propTypes = {
  getProductList: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.object)
};

ProductList.defaultProps = {
  list: []
};

const mapDispatchToProps = {
  getProductList: getList
};

export default connect(selector, mapDispatchToProps)(ProductList);
