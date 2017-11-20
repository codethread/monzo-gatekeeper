import requestsHandler from './requests/requestsHandler';
import requests from './requests/requests';

const sendAwaitedData = async (request) => {
  try {
    console.log(`requesting to ${request}`);
    const data = await requestsHandler({ url: request });
    return data;
  } catch (err) {
    return err;
  }
};

export default {
  noRouteFound({ path, logger }) {
    logger.log({ level: 'info', message: 'returning noRouteFound' });
    return { error: `v1 endpoint: ${path} does not exist` };
  },
  test() {
    return { msg: 'gatekeeper v1 working' };
  },
  whoami() {
    return sendAwaitedData(requests.whoami);
  },
  accounts() {
    return sendAwaitedData(requests.accounts);
  },
  balance() {
    return sendAwaitedData(requests.balance);
  },
  transactions() {
    return sendAwaitedData(requests.transactions);
  },
};
