import styled from 'styled-components';

import { Link } from 'react-router-dom';

import {
  Button,
  Text
} from '@styles/buttonsHelpers.styles';

const AnchorWrapper = styled(Link)`
  ${Button}
`;

const AnchorText = styled.span`
  ${Text}
`;

export {
  AnchorWrapper,
  AnchorText
};
