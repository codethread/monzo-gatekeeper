import statusResolver from 'src/middleware/statusResolver';

const spentToday = ({ data, status }) => {
    if (status !== 200) {
        return statusResolver({ status });
    }

    return { spentToday: data.spend_today };
};

export default spentToday;
