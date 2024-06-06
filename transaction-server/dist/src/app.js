"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transaction_route_1 = __importDefault(require("./routes/transaction.route"));
const errorHandler_util_1 = require("./utils/errorHandler.util");
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const cors_1 = __importDefault(require("cors"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const app = (0, express_1.default)();
// security middlewares
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, hpp_1.default)({
    whitelist: ['id'],
}));
app.use((0, express_mongo_sanitize_1.default)());
app.use(express_1.default.json());
// routes
app.get('/', (_, res) => {
    res.status(200).send('Server is working');
});
app.use(transaction_route_1.default);
app.all('*', (_, res) => {
    res.status(404).send('Requested resource not found.');
});
// error handler
app.use(errorHandler_util_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map