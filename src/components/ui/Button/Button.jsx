import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper, ButtonText } from './Button.styles';

const Button = (props) => (
  <ButtonWrapper
    type={props.type}
    onClick={props.onClick}
    secondary={props.secondary ? 1 : 0}
  >
    <ButtonText>
      {props.children}
    </ButtonText>
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  type: PropTypes.oneOf(['reset', 'submit', 'button']),
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  secondary: false,
  onClick: () => {}
};

export default Button;
