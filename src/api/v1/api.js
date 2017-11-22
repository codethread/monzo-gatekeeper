import requests from './requests/requests';
import resolvers from './resolvers/_index';
import connectionHelper from './connection-helper';

const api = {
  noRouteFound({ path }) {
    return { error: `v1 endpoint: ${path} does not exist` };
  },
  test() {
    return { msg: 'gatekeeper v1 working' };
  },
  authenticate: async () => {
    const response = await connectionHelper({ request: requests.authenticate });
    return resolvers.authenticate(response);
  },
  whoami: async () => {
    const response = await connectionHelper({ request: requests.whoami });
    return resolvers.whoami(response);
  },
  accounts: async () => {
    const response = await connectionHelper({ request: requests.accounts });
    return resolvers.accounts(response);
  },
  balance: async () => {
    const response = await connectionHelper({ request: requests.balance });
    return resolvers.balance(response);
  },
  transactions: async () => {
    const response = await connectionHelper({ request: requests.transactions });
    return resolvers.transactions(response);
  },
};

export default api;
