import constants from './constants';

export default {
  transactions: `transactions?account_id=${constants.ACCOUNT_ID}&limit=10`,
  accounts: 'accounts',
  balance: `balance?account_id=${constants.ACCOUNT_ID}`,
  whoami: 'ping/whoami',
};
