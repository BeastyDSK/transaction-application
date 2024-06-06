import { NextFunction, Request, Response } from 'express';
import { UserDefinedException } from './types';

export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    const { message, code } = error as unknown as UserDefinedException;

    res.status(code);

    if (process.env.NODE_ENV === 'development') {
        return res.json({ message, code });
    }

    res.json({ message, code });
}
