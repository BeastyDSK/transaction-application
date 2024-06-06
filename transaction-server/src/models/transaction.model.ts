import mongoose from 'mongoose';

const transactionsSchema = new mongoose.Schema({
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

const transactions = mongoose.model('transactions', transactionsSchema);

export default transactions;
