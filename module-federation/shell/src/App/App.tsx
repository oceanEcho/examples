import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '../components/Layout';
import { Navigation } from '../components/Navigation';
import { About } from '../pages/About';
import { Microservice } from '../components/LazyService/types';
import { LazyService } from '../components/LazyService';
import { Loader } from '../components/Loader';
import { config } from '../config';

import Todo from 'widgets/Todo';

const queryClient = new QueryClient();

export const App = () => {
  const gallery: Microservice = {
    url: config.microservices.widgets.url,
    scope: 'widgets',
    module: './Gallery',
  };

  return (
    <QueryClientProvider client={queryClient} contextSharing>
      <Router>
        <Layout sidebarContent={<Navigation />}>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/gallery'>
              <LazyService microservice={gallery} loadingMessage={<Loader />} />
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
