import statusResolver from 'src/middleware/statusResolver';

const whoami = ({ data, status }) => {
    if (status !== 200) {
        return statusResolver({ status });
    }

    return { whoami: data };
};

export default whoami;
