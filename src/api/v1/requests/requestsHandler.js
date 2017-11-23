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
    return requestPromise(options);
};
