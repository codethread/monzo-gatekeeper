import whoami from './whoami';
import balance from './balance';

export default {
  authenticate(data) {
    return data;
  },
  whoami,
  accounts(data) {
    return data;
  },
  balance,
  transactions(data) {
    return data;
  },
};
