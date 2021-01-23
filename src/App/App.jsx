import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Navigation from '../components/Navigation';

import store from './store';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout sidebarContent={<Navigation />}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </Provider>
  );
};
