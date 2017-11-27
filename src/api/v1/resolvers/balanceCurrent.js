import statusResolver from 'src/middleware/statusResolver';

const balanceCurrent = ({ data, status }) => {
    if (status !== 200) {
        return statusResolver({ status });
    }

    return { balanceCurrent: data.balance };
};

export default balanceCurrent;
