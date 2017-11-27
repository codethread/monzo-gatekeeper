const URL = 'https://api.monzo.com/';

export default {
    transactions: `${URL}transactions?account_id=$ACCOUNT_ID&limit=10`,
    transactionById: `${URL}transactions/tx_00009E3NxX9vhvVVfIP9UX`,
    accounts: `${URL}accounts`,
    balance: `${URL}balance?account_id=$ACCOUNT_ID`,
    whoami: `${URL}ping/whoami`,
};
