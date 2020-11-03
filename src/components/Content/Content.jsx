import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Content.styles.js';

const Content = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;
