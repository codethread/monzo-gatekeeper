import statusResolver from 'src/middleware/statusResolver';

const balance = ({ data, status }) => {
    if (status !== 200) {
        return statusResolver({ status });
    }

    return { balance: data };
};

export default balance;
