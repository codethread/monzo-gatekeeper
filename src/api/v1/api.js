import requests from './requests/requests';
import connectionHelper from './connection-helper';

const api = {
  noRouteFound({ path }) {
    return { error: `v1 endpoint: ${path} does not exist` };
  },
  test() {
    return { msg: 'gatekeeper v1 working' };
  },
  authenticate() {
    return connectionHelper({ request: requests.authenticate });
  },
  whoami() {
    return connectionHelper({ request: requests.whoami });
  },
  accounts() {
    return connectionHelper({ request: requests.accounts });
  },
  balance() {
    return connectionHelper({ request: requests.balance });
  },
  transactions() {
    return connectionHelper({ request: requests.transactions });
  },
};

export default api;
