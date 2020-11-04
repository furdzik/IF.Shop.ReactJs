import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { menu } from '@config/constants';

import Container from '@components/Container';
import Header from '@components/Header';
import Menu from '@components/Menu';
import Content from '@components/Content';
import Footer from '@components/Footer';

import selector from './Layout.selector';

const Layout = (props) => (
  <React.Fragment>
    {/* przekazać parametry do BasketInfo ze reducera basket */}
    <Header />
    <Menu
      list={menu}
      active={props.menuActiveItem ? props.menuActiveItem : 0}
    />
    <Container>
      <Content>
        {props.children}
      </Content>
    </Container>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menuActiveItem: PropTypes.number
};

Layout.defaultProps = {
  menuActiveItem: 0
};

const mapDispatchToProps = {
};

export default connect(selector, mapDispatchToProps)(Layout);
