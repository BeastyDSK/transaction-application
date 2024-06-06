import express, { Request, Response } from 'express';
import transactionRouter from './routes/transaction.route';
import { errorHandler } from './utils/errorHandler.util';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import mmongoSanitize from 'express-mongo-sanitize';
const app = express();

// security middlewares
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(
    hpp({
        whitelist: ['id'],
    })
);
app.use(mmongoSanitize());
app.use(express.json());

// routes
app.get('/', (_: Request, res: Response) => {
    res.status(200).send('Server is working');
});

app.use(transactionRouter);

app.all('*', (_: Request, res: Response) => {
    res.status(404).send('Requested resource not found.');
});

// error handler
app.use(errorHandler);

export default app;
