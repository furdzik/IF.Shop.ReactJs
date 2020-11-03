import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { MENU_ID, MENU_PATHS, MENU_NAMES } from '@config/constants';

import Layout from '@containers/Layout';
import PageTitle from '@components/PageTitle';
import ProductList from '@containers/ProductList';
import ProductDetails from '@containers/ProductDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
      >
        <Layout>
          <PageTitle>{MENU_NAMES.HOME_PAGE}</PageTitle>
        </Layout>
      </Route>

      <Route
        path={MENU_PATHS.PRODUCTS}
        exact
      >
        <Layout menuActiveItem={MENU_ID.PRODUCTS}>
          <PageTitle>{MENU_NAMES.PRODUCTS}</PageTitle>
          <ProductList />
        </Layout>
      </Route>

      <Route
        exact
        path={`${MENU_PATHS.PRODUCTS}/:id`}
        render={(props) => {
          // eslint-disable-next-line react/prop-types
          const { id } = props.match.params;

          if (id) {
            return (
              <Layout menuActiveItem={MENU_ID.PRODUCTS}>
                <ProductDetails id={id} />
              </Layout>
            );
          }

          return null;
        }}
      />

      <Route
        path={MENU_PATHS.INSPIRATIONS}
        exact
      >
        <Layout menuActiveItem={MENU_ID.INSPIRATIONS}>
          <PageTitle>{MENU_NAMES.INSPIRATIONS}</PageTitle>
        </Layout>
      </Route>

      <Route
        path={MENU_PATHS.ABOUT}
        exact
      >
        <Layout menuActiveItem={MENU_ID.ABOUT}>
          <PageTitle>{MENU_NAMES.ABOUT}</PageTitle>
        </Layout>
      </Route>

      <Route
        path={MENU_PATHS.BASKET}
        exact
      >
        <Layout menuActiveItem={MENU_ID.BASKET}>
          <PageTitle>{MENU_NAMES.BASKET}</PageTitle>
        </Layout>
      </Route>

      <Route
        render={() => <h1>Page not found</h1>}
      />
    </Switch>
  </Router>
);

export default Routes;
