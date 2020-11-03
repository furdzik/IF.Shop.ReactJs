import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { mdiCart } from '@mdi/js';

import { MENU_PATHS } from '@config/constants';
import currencyFormatter from '@utils/currencyFormatter';

import Anchor from '@components/ui/Anchor';

import {
  Wrapper,
  Box,
  BasketAmountWrapper,
  IconStyled
} from './BasketInfo.styles.js';
import messages from './BasketInfo.messages';

const BasketInfo = (props) => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Box>
        <IconStyled
          path={mdiCart}
          size="4rem"
        />
        <BasketAmountWrapper>
          {props.basketAmount}
        </BasketAmountWrapper>
      </Box>
      <Box>
        {currencyFormatter(intl, props.basketTotalPrice)}
      </Box>
      <Box>
        <Anchor to={MENU_PATHS.BASKET}>{intl.formatMessage(messages.buttonText)}</Anchor>
      </Box>
    </Wrapper>
  );
}

BasketInfo.propTypes = {
  basketAmount: PropTypes.number.isRequired,
  basketTotalPrice: PropTypes.number.isRequired
};

export default BasketInfo;
