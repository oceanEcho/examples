import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import Navigation from '../components/Navigation';
import { About } from '../pages/About';
import Todo from 'widgets/Todo';

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
              <Todo />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
};
