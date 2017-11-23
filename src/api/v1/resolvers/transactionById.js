import statusResolver from 'src/api/v1/statusResolver';

const transactionById = ({ data, status }) => {
    if (status !== 200) {
        return statusResolver({ status });
    }

    return { transactionById: data.transaction };
};

export default transactionById;
