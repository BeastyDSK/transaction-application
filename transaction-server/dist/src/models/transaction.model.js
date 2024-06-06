"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionsSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
    },
    date: {
        type: Number,
    },
    Comments: {
        type: String,
    },
    status: {
        type: String,
    },
});
const transactions = mongoose_1.default.model('transactions', transactionsSchema);
exports.default = transactions;
//# sourceMappingURL=transaction.model.js.map