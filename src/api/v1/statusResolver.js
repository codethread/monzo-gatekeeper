const statusResolver = ({ status }) => {
  switch (status) {
    case 401:
      return { err: 'unauthorized.bad_access_token' };
    case 404:
      return { err: 'moved' };
    case 500:
      return { err: 'apiDown' };
    default:
      return { err: 'unknown' };
  }
};

export default statusResolver;
