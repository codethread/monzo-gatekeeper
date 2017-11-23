import statusResolver from 'src/api/v1/statusResolver';

const balance = ({ data, status }) => {
    if (status !== 200) {
        return statusResolver({ status });
    }

    return { balance: data };
};

export default balance;
