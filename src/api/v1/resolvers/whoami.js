const happyPath = (data) => {
  return data;
};

const whoami = ({ data, status }) => {
  switch (status) {
    case 200:
      return happyPath(data);
    case 401:
      return { err: 'unauthorized.bad_access_token' };
    default:
      return { err: 'unknown' };
  }
};

export default whoami;
