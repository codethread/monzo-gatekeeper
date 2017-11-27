import requestsHandler from './requestsHandler';

const connectionHelper = async ({ request }, { logger }) => {
    try {
        logger.log({ level: 'info', message: `REQUEST to ${request}` });
        const data = await requestsHandler({ url: request });
        logger.log({ level: 'info', message: `RESPONSE to ${request}:\n${JSON.stringify(data)}` });

        return { status: 200, data };
    } catch (err) {
        logger.log({ level: 'error', message: `failed request ${request} with error: ${JSON.stringify(err)}` });

        return { status: err.statusCode, data: err };
    }
};

export default connectionHelper;
