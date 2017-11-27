import requestPromise from 'request-promise';

const { ACCOUNT_ID, ACCESS_TOKEN } = process.env;

export default ({ url }) => {
    const uri = url.replace('$ACCOUNT_ID', ACCOUNT_ID);

    const options = {
        uri,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        json: true,
    };

    return requestPromise(options);
};
