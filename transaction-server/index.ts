import { config } from 'dotenv';
import app from './src/app';
import mongoose from 'mongoose';

if (process.env.NODE_ENV == 'development') {
    config();
}

// constants
const port = process.env.PORT;

// connect to db
const dbUrl = (process.env.DB_URL as string)
    .replace('<password>', process.env.DB_PASSWORD!)
    .replace('<username>', process.env.DB_USERNAME!);

async function connectToDB() {
    try {
        await mongoose.connect(dbUrl);
        console.log('DB connection successful!');
    } catch (error) {
        console.log('Failed to connect to DB', error);
    }
}

// start the server
const server = app.listen(port, () => {
    connectToDB();
    console.log(`http://localhost:${port}`);
});

// handle process relaetd errors
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated.');
    });
});

process.on('unhandledRejection', (err: Error) => {
    console.log('Server error, shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
