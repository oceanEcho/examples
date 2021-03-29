import React, { lazy, ReactNode, Suspense } from 'react';

import { useDynamicScript } from './useDynamicScript';
import { loadComponent } from './loadComponent';
import { Microservice } from './types';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

interface ILazyServiceProps<T = Record<string, unknown>> {
  microservice: Microservice<T>;
  loadingMessage?: ReactNode;
  errorMessage?: ReactNode;
}

export function LazyService<T = Record<string, unknown>>({
  microservice,
  loadingMessage,
  errorMessage,
}: ILazyServiceProps<T>): JSX.Element {
  const { ready, failed } = useDynamicScript(microservice.url);

  const errorNode = errorMessage || <span>Failed to load dynamic script: {microservice.url}</span>;

  if (failed) {
    return <>{errorNode}</>;
  }

  const loadingNode = loadingMessage || <span>Loading dynamic script: {microservice.url}</span>;

  if (!ready) {
    return <>{loadingNode}</>;
  }

  const Component = lazy(loadComponent(microservice.scope, microservice.module));

  return (
    <ErrorBoundary>
      <Suspense fallback={loadingNode}>
        <Component {...(microservice.props || {})} />
      </Suspense>
    </ErrorBoundary>
  );
}
