import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import {  } from './ProductList.reducer';
import selector from './ProductList.selector';

const ProductList = (props) => (
  <React.Fragment>

  </React.Fragment>
);

ProductList.propTypes = {
};

const mapDispatchToProps = {
};

export default connect(selector, mapDispatchToProps)(ProductList);
