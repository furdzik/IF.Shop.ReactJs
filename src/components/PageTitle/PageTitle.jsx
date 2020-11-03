import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './PageTitle.styles.js';

const PageTitle = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
);

PageTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitle;
