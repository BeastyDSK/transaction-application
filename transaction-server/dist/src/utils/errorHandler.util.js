"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(error, req, res, next) {
    const { message, code } = error;
    res.status(code);
    if (process.env.NODE_ENV === 'development') {
        return res.json({ message, code });
    }
    res.json({ message, code });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.util.js.map