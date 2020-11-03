import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Gallery.styles.js';

const Gallery = (props) => (
  <Wrapper>
    {props.images}
  </Wrapper>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Gallery;
