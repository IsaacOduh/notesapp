import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router';

const app = express();
app.use(bodyParser.json());
app.use('/api/v1/', router);

const port = process.env.PORT || 8080;
app.listen(8080, () => console.log(`Listening on port ${port}....`));
