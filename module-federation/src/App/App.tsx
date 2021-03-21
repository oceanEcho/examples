import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import Navigation from '../components/Navigation';
import { About } from '../pages/About';
import { Home } from '../pages/Home';

import store from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout sidebarContent={<Navigation />}>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};
