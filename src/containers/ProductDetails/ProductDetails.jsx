import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductDetailsComponent from '@components/ProductDetails';
import Loader from '@components/ui/Loader';

import { getDetails } from './ProductDetails.reducer';
import selector from './ProductDetails.selector';

const ProductDetails = (props) => {
  useEffect(() => {
    props.getProductDetails(props.id);
  }, []);

  return !props.loading
  && (props.id || props.name || props.price || props.description) ? (
    <ProductDetailsComponent
      id={props.id}
      name={props.name}
      price={props.price}
      availableColors={props.availableColors}
      description={props.description}
      images={props.images}
    />
    ) : <Loader covered />;
};

ProductDetails.propTypes = {
  description: PropTypes.string.isRequired,
  getProductDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  availableColors: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  images: PropTypes.arrayOf(PropTypes.string)
};

ProductDetails.defaultProps = {
  id: null,
  availableColors: [],
  images: []
};

const mapDispatchToProps = {
  getProductDetails: getDetails
};

export default connect(selector, mapDispatchToProps)(ProductDetails);
