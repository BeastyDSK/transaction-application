"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
class ValidationException extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=ValidationException.js.map