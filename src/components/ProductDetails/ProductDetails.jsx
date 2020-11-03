import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import currencyFormatter from '@utils/currencyFormatter';

import PageTitle from '@components/PageTitle';
import Gallery from '@components/Gallery';
import Button from '@components/ui/Button';

import {
  Wrapper,
  DetailsWrapper,
  Description,
  AddToBasketBox,
  Price,
  Colors,
  Color
} from './ProductDetails.styles.js';

const ProductDetails = (props) => {
  const intl = useIntl();

  return (
    <Wrapper>
      <DetailsWrapper>
        <Gallery images={props.images} />
        <div>
          <PageTitle>{props.name}</PageTitle>
          <AddToBasketBox>
            <Price>{currencyFormatter(intl, props.price)}</Price>
            <Button secondary>Buy</Button>
            <Colors>
              {
                props.availableColors.map((el) => (
                  <Color colorCode={el.code} />
                ))
              }
            </Colors>
          </AddToBasketBox>
          <Description>{props.description}</Description>
        </div>
      </DetailsWrapper>
    </Wrapper>
  );
};

ProductDetails.propTypes = {
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  availableColors: PropTypes.arrayOf(PropTypes.object),
  images: PropTypes.arrayOf(PropTypes.string)
};

ProductDetails.defaultProps = {
  availableColors: [],
  images: []
};

export default ProductDetails;
