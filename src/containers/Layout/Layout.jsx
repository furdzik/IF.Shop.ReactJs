import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { useIntl } from 'react-intl';

import { menu } from '@config/constants';

import Container from '@components/Container';
import Header from '@components/Header';
import Menu from '@components/Menu';
import Footer from '@components/Footer';

// import {  } from './Layout.reducer';
import selector from './Layout.selector';

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <Menu
      list={menu}
      active={props.menuActiveItem ? props.menuActiveItem : 0}
    />
    <Container>
      {/* boczne menu, tylko na stronie produktowej */}
      {props.children}
    </Container>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menuActiveItem: PropTypes.number
};

const mapDispatchToProps = {
};

export default connect(selector, mapDispatchToProps)(Layout);
