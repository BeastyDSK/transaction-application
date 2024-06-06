import { Router } from 'express';
import { getTransactions, updateTransaction } from '../controllers/transaction.controller';

const transactionRouter = Router();

transactionRouter.get('/api/transaction', getTransactions);
transactionRouter.patch('/api/transaction/:id', updateTransaction);

export default transactionRouter;
