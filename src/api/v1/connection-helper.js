import setup from 'src/setup';
import requestsHandler from './requests/requestsHandler';

const connectionHelper = async ({ request }) => {
  const { logger } = setup;
  try {
    logger.log({ level: 'info', message: `requesting to ${request}` });
    const data = await requestsHandler({ url: request });
    return { status: 200, data };
  } catch (err) {
    logger.log({ level: 'error', message: `failed request ${request} with error: ${err}` });
    return { status: err.statusCode, data: err };
  }
};

export default connectionHelper;
