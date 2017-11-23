import express from 'express';

import setup from 'src/setup';
import v1Api from 'src/api/v1/api';

const app = express();

app.get('/', (req, res) => res.send({ error: 'please provide an api string' }));

app.get('/v1/*', async (req, res) => {
    const params = {
        path: req.path.slice(4),
    };

    const api = v1Api[params.path] || v1Api.noRouteFound;

    const data = await api(params);

    res.send(data);
});

app.get('/*', (req, res) => res.send({ error: 'query not recognised' }));

app.listen(setup.port, () => setup.logger.log({
    level: 'info',
    message: `server listening on port ${setup.port}`,
}));

export default app;

