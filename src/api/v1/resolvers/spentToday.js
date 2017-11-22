const happyPath = (data) => {
  return { spentToday: data.spend_today };
};

const spentToday = ({ data, status }) => {
  switch (status) {
    case 200:
      return happyPath(data);
    case 401:
      return { err: 'unauthorized.bad_access_token' };
    default:
      return { err: 'unknown' };
  }
};

export default spentToday;
