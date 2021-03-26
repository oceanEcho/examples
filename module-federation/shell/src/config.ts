import axios from 'axios';

export const config = {
  microservices: {
    widgets: {
      url: '',
    },
  },
  init: (): Promise<void | Record<string, unknown>> =>
    axios.get('/environment.json').then(({ data }) => {
      const remoteConfig = typeof data === 'string' ? JSON.parse(data) : data;
      config.microservices = {
        ...config.microservices,
        ...remoteConfig.microservices,
      };
    }),
};
