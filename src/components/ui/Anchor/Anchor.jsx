import React from 'react';
import PropTypes from 'prop-types';

import { AnchorWrapper, AnchorText } from './Anchor.styles';

const Anchor = (props) => (
  <AnchorWrapper
    to={props.to}
    secondary={props.secondary ? 1 : 0}
  >
    <AnchorText>
      {props.children}
    </AnchorText>
  </AnchorWrapper>
);

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  secondary: PropTypes.bool
};

Anchor.defaultProps = {
  secondary: false
};

export default Anchor;
