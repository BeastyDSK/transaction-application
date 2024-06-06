import { NextFunction, Request, Response } from 'express';
import transactions from '../models/transaction.model';
import { ValidationException } from '../exceptions/ValidationException';
import { NotFoundException } from '../exceptions/NotFoundException';

export async function getTransactions(req: Request, res: Response, next: NextFunction) {
    try {
        const transactionList = await transactions
            .find(
                { status: { $in: ['REJECTED', 'IN PROGRESS', 'COMPLETED'] } },
                { id: true, date: true, Comments: true }
            )
            .sort('date');

        const formattedTransactionData = transactionList.map((transaction) => {
            const { _id, id, date, Comments } = transaction;
            return { id, _id, date: new Date(date as number), Comments };
        });

        res.status(200).json(formattedTransactionData);
    } catch (error) {
        next(error);
    }
}

export async function updateTransaction(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { Comments } = req.body;
        if (!id) {
            throw new ValidationException('Field ID not found.', 400);
        }

        const comments: string = Comments?.trim();
        if (!(comments && comments.length > 0)) {
            throw new ValidationException('Invalid Comments provided in the request body.', 400);
        }

        const data = await transactions.findOneAndUpdate({ id }, { Comments: comments });

        if (!data) {
            throw new NotFoundException(`Transaction with ID(${id}) not found.`, 404);
        }

        res.status(204).json({ id, Comments, _id: data._id, date: data.date });
    } catch (error) {
        next(error);
    }
}
