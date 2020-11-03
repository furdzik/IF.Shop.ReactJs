import React from 'react';
import PropTypes from 'prop-types';

import Container from '@components/Container';

import {
  Wrapper,
  MenuList,
  MenuItem,
  LinkStyled
} from './Menu.styles.js';

const Menu = (props) => (
  <Wrapper>
    <Container>
      <MenuList>
      {
        props.list.map((el) => (
          <MenuItem
            key={el.id}
            active={props.active === el.id ? 1 : 0}
          >
            <LinkStyled to={`${el.link}`}>
              {el.name}
            </LinkStyled>
          </MenuItem>
        ))
      }
      </MenuList>
    </Container>
  </Wrapper>
);

Menu.propTypes = {
  list: PropTypes.array.isRequired,
  active: PropTypes.number.isRequired
};

export default Menu;
