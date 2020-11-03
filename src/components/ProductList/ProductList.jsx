import React from 'react';
import PropTypes from 'prop-types';

import { MENU_PATHS } from '@config/constants';

import {
  List,
  ListItem,
  LinkStyled
} from './ProductList.styles.js';

const ProductList = (props) => props.list ? (
  <List>
    {props.list.map((el) => (
      <ListItem key={el.id}>
        <LinkStyled to={`${MENU_PATHS.PRODUCTS}/${el.id}`}>
          {el.name}
        </LinkStyled>
      </ListItem>
    ))}
  </List>
) : null;

ProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
};

ProductList.defaultProps = {
  list: []
};

export default ProductList;
