import connectionHelper from 'src/middleware/connection-helper';

import requests from './requests';
import resolvers from './resolvers';

const api = {
    noRouteFound({ path }) {
        return { error: `v1 endpoint: ${path} does not exist` };
    },
    test() {
        return { msg: 'gatekeeper v1 working' };
    },
    authenticate: async ({ logger }) => {
        const response = await connectionHelper({ request: requests.authenticate, logger });
        return resolvers.authenticate({ response, logger });
    },
    whoami: async ({ logger }) => {
        const response = await connectionHelper({ request: requests.whoami, logger });
        return resolvers.whoami({ response, logger });
    },
    accounts: async ({ logger }) => {
        const response = await connectionHelper({ request: requests.accounts, logger });
        return resolvers.accounts({ response, logger });
    },
    balance: async ({ logger }) => {
        const response = await connectionHelper({ request: requests.balance, logger });
        return resolvers.balance({ response, logger });
    },
    balanceCurrent: async ({ logger }) => {
        const response = await connectionHelper({ request: requests.balance, logger });
        return resolvers.balanceCurrent({ response, logger });
    },
    spentToday: async ({ logger }) => {
        const response = await connectionHelper({ request: requests.balance, logger });
        return resolvers.spentToday({ response, logger });
    },
    transactions: async ({ logger }) => {
        const response = await connectionHelper({ request: requests.transactions, logger });
        return resolvers.transactions({ response, logger });
    },
    transactionById: async ({ logger }) => {
        const response = await connectionHelper({ request: requests.transactionById, logger });
        return resolvers.transactionById({ response, logger });
    },
};

export default api;
