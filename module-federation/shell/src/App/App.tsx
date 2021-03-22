import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '../components/Layout';
import { Navigation } from '../components/Navigation';
import { About } from '../pages/About';

import Todo from 'widgets/Todo';
import Gallery from 'widgets/Gallery';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <Router>
        <Layout sidebarContent={<Navigation />}>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/gallery'>
              <Gallery />
            </Route>
            <Route exact path='/'>
              <Todo />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};
