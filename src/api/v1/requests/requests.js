export default {
  transactions: `transactions?account_id=${process.env.ACCOUNT_ID}&limit=10`,
  accounts: 'accounts',
  balance: `balance?account_id=${process.env.ACCOUNT_ID}`,
  whoami: '/ping/whoami',
};
