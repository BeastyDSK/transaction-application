"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaction_controller_1 = require("../controllers/transaction.controller");
const transactionRouter = (0, express_1.Router)();
transactionRouter.get('/api/transaction', transaction_controller_1.getTransactions);
transactionRouter.patch('/api/transaction/:id', transaction_controller_1.updateTransaction);
exports.default = transactionRouter;
//# sourceMappingURL=transaction.route.js.map