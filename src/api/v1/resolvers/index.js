import whoami from './whoami';
import balance from './balance';
import balanceCurrent from './balanceCurrent';
import spentToday from './spentToday';
import transactionById from './transactionById';

export default {
    authenticate(data) {
        return data;
    },
    whoami,
    accounts(data) {
        return data;
    },
    balance,
    balanceCurrent,
    spentToday,
    transactions(data) {
        return data;
    },
    transactionById,
};
