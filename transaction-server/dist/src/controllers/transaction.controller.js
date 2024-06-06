"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTransaction = exports.getTransactions = void 0;
const transaction_model_1 = __importDefault(require("../models/transaction.model"));
const ValidationException_1 = require("../exceptions/ValidationException");
const NotFoundException_1 = require("../exceptions/NotFoundException");
async function getTransactions(req, res, next) {
    try {
        const transactionList = await transaction_model_1.default
            .find({ status: { $in: ['REJECTED', 'IN PROGRESS', 'COMPLETED'] } }, { id: true, date: true, Comments: true })
            .sort('date');
        const formattedTransactionData = transactionList.map((transaction) => {
            const { _id, id, date, Comments } = transaction;
            return { id, _id, date: new Date(date), Comments };
        });
        res.status(200).json(formattedTransactionData);
    }
    catch (error) {
        next(error);
    }
}
exports.getTransactions = getTransactions;
async function updateTransaction(req, res, next) {
    try {
        const { id } = req.params;
        const { Comments } = req.body;
        if (!id) {
            throw new ValidationException_1.ValidationException('Field ID not found.', 400);
        }
        const comments = Comments?.trim();
        if (!(comments && comments.length > 0)) {
            throw new ValidationException_1.ValidationException('Invalid Comments provided in the request body.', 400);
        }
        const data = await transaction_model_1.default.findOneAndUpdate({ id }, { Comments: comments });
        if (!data) {
            throw new NotFoundException_1.NotFoundException(`Transaction with ID(${id}) not found.`, 404);
        }
        res.status(204).json({ id, Comments, _id: data._id, date: data.date });
    }
    catch (error) {
        next(error);
    }
}
exports.updateTransaction = updateTransaction;
//# sourceMappingURL=transaction.controller.js.map