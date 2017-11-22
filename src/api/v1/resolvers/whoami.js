import statusResolver from 'src/api/v1/statusResolver';

const whoami = ({ data, status }) => {
  if (status !== 200) {
    return statusResolver({ status });
  }

  return { whoami: data };
};

export default whoami;
