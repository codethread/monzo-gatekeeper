import setup from 'src/setup';
import requestsHandler from './requestsHandler';

const connectionHelper = async ({ request }) => {
    const { logger } = setup;
    try {
        logger.log({ level: 'info', message: `REQUEST to ${request}` });
        const data = await requestsHandler({ url: request });
        logger.log({ level: 'info', message: `RESPONSE to ${request}:\n${data}` });

        return { status: 200, data };
    } catch (err) {
        logger.log({ level: 'error', message: `failed request ${request} with error: ${err}` });

        return { status: err.statusCode, data: err };
    }
};

export default connectionHelper;
