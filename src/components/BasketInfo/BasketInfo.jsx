import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { mdiCart } from '@mdi/js';

import currencyFormatter from '@utils/currencyFormatter';

import Button from '@components/ui/Button';

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
        <Button onClick={() => {}}>{intl.formatMessage(messages.buttonText)}</Button>
      </Box>
    </Wrapper>
  );
}

BasketInfo.propTypes = {
  basketAmount: PropTypes.number.isRequired,
  basketTotalPrice: PropTypes.number.isRequired
};

export default BasketInfo;
