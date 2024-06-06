"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = __importDefault(require("./src/app"));
const mongoose_1 = __importDefault(require("mongoose"));
if (process.env.NODE_ENV == 'development') {
    (0, dotenv_1.config)();
}
// constants
const port = process.env.PORT;
// connect to db
const dbUrl = process.env.DB_URL
    .replace('<password>', process.env.DB_PASSWORD)
    .replace('<username>', process.env.DB_USERNAME);
async function connectToDB() {
    try {
        await mongoose_1.default.connect(dbUrl);
        console.log('DB connection successful!');
    }
    catch (error) {
        console.log('Failed to connect to DB', error);
    }
}
// start the server
const server = app_1.default.listen(port, () => {
    connectToDB();
    console.log(`http://localhost:${port}`);
});
// handle process relaetd errors
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated.');
    });
});
process.on('unhandledRejection', (err) => {
    console.log('Server error, shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
//# sourceMappingURL=index.js.map