import constants from './constants';

export default {
  transactions: { request: `transactions?account_id=${constants.ACCOUNT_ID}&limit=10`, safeLog: 'transactions?account_id=ACCOUNT_ID&limit=10' },
  accounts: { request: 'accounts', safeLog: 'accounts' },
  balance: { request: `balance?account_id=${constants.ACCOUNT_ID}`, safeLog: 'balance?account_id=ACCOUNT_ID' },
  whoami: { request: 'ping/whoami', safeLog: 'ping/whoami' },
};
