const URL = 'https://api.monzo.com/';

export default {
    TRANSACTIONS: `${URL}transactions?account_id=$ACCOUNT_ID&limit=10`,
    TRANSACTION_BY_ID: `${URL}transactions/tx_00009E3NxX9vhvVVfIP9UX`,
    ACCOUNTS: `${URL}accounts`,
    BALANCE: `${URL}balance?account_id=$ACCOUNT_ID`,
    WHOAMI: `${URL}ping/whoami`,
};
