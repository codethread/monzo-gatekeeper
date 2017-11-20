import requestPromise from 'request-promise';

import constants from './constants';

export default ({ url }) => {
  const options = {
    uri: `${constants.URL}${url}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${constants.ACCESS_TOKEN}`,
    },
    json: true,
  };
  console.log(`making request to: ${options.uri} \n with headers\n ${JSON.stringify(options.headers)}`);
  return requestPromise(options);
};
