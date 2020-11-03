import React from 'react';
import PropTypes from 'prop-types';

import { AnchorWrapper, AnchorText } from './Anchor.styles';

const Anchor = (props) => (
  <AnchorWrapper
    to={props.to}
    buttonPrimary={!props.secondary}
    buttonSecondary={props.secondary}
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
