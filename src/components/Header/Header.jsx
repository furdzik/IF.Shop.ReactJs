import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '@assets/logo.png';

import Container from '@components/Container';
import BasketInfo from '@components/BasketInfo';

import {
  Wrapper,
  LogoWrapper,
  ImgStyled,
  SearchWrapper,
  BasketWrapper
} from './Header.styles.js';

const Header = () => (
  <header>
  <Container>
    <Wrapper>
      <LogoWrapper>
        <Link to='/'>
          <ImgStyled src={logo} alt="" />
        </Link>
      </LogoWrapper>
      <SearchWrapper>
        Tutaj będzie wyszukiwarka
      </SearchWrapper>
      <BasketWrapper>
        <BasketInfo
          basketAmount={2}
          basketTotalPrice={300}
        />
      </BasketWrapper>
    </Wrapper>
  </Container>
  </header>
);

Header.propTypes = {
};

export default Header;
