import setup from 'src/setup';
import requestsHandler from './requests/requestsHandler';

const connectionHelper = async ({ request: { request, safeLog } }) => {
    const { logger } = setup;
    try {
        logger.log({ level: 'info', message: `REQUEST to ${safeLog}` });
        const data = await requestsHandler({ url: request });
        logger.log({ level: 'info', message: `RESPONSE to ${safeLog}:\n${data}` });

        return { status: 200, data };
    } catch (err) {
        logger.log({ level: 'error', message: `failed request ${safeLog} with error: ${err}` });

        return { status: err.statusCode, data: err };
    }
};

export default connectionHelper;
