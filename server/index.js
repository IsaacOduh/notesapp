import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import router from './routes/router';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1/', router);

const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);

export default app;
