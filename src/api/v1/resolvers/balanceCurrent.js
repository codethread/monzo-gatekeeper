import statusResolver from 'src/api/v1/statusResolver';

const balanceCurrent = ({ data, status }) => {
    if (status !== 200) {
        return statusResolver({ status });
    }

    return { balanceCurrent: data.balance };
};

export default balanceCurrent;
