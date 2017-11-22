import constants from './constants';

export default {
  transactions: { request: `transactions?account_id=${constants.ACCOUNT_ID}&limit=10`, safeLog: 'transactions?account_id=$account_id&limit=10' },
  transactionById: { request: 'transactions/tx_00009E3NxX9vhvVVfIP9UX', safeLog: 'transactions/$transaction_id' },
  accounts: { request: 'accounts', safeLog: 'accounts' },
  balance: { request: `balance?account_id=${constants.ACCOUNT_ID}`, safeLog: 'balance?account_id=$account_id' },
  whoami: { request: 'ping/whoami', safeLog: 'ping/whoami' },
};
