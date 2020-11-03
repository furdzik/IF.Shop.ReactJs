import styled from 'styled-components';

import Icon from '@mdi/react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Box = styled.div`
  & + & {
    margin-left: 2rem;
  }
`;

const BasketAmountWrapper = styled.span`
  display: inline-block;
  border-radius: 50%;
  margin-top: 1.5rem;
  margin-left: -1.5rem;
  padding: .2rem .7rem;
  background: ${(props) => props.theme.colors.primaryColor};
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
`;

const IconStyled = styled(Icon)`
  fill: ${(props) => props.theme.colors.quaternaryColor};
`;

export {
  Wrapper,
  Box,
  IconStyled,
  BasketAmountWrapper
};
