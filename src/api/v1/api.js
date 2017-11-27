import connectionHelper from 'src/middleware/connection-helper';

import resolvers from './resolvers';
import requests from './requests';

const apiCall = async ({ request }, ctx) => {
    const { path } = ctx;
    const { data, status } = await connectionHelper({ request }, ctx);
    return resolvers[path]({ data, status }, ctx);
};

const api = {
    noRouteFound({ path }) {
        return { error: `v1 endpoint: ${path} does not exist` };
    },
    test() {
        return { msg: 'gatekeeper v1 working' };
    },
    authenticate: ctx => (apiCall({ request: requests.AUTHENTICATE }, ctx)),
    whoami: ctx => (apiCall({ request: requests.WHOAMI }, ctx)),
    accounts: ctx => (apiCall({ request: requests.ACCOUNTS }, ctx)),
    balance: ctx => (apiCall({ request: requests.BALANCE }, ctx)),
    balanceCurrent: ctx => (apiCall({ request: requests.BALANCE }, ctx)),
    spentToday: ctx => (apiCall({ request: requests.BALANCE }, ctx)),
    transactions: ctx => (apiCall({ request: requests.TRANSACTIONS }, ctx)),
    transactionById: ctx => (apiCall({ request: requests.TRANSACTION_BY_ID }, ctx)),
};

export default api;
