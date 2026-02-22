import mongoose from 'mongoose';    
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const mongoUri = process.env.DATABASE_URI;
        if (!mongoUri) {
            throw new Error('Missing MongoDB URI. Set DATABASE_URI in your environment.');
        }
        if (!DB_NAME) {
            throw new Error('Missing Database Name. Set DB_NAME in your constants.js file.');
        }

        const conn = await mongoose.connect(`${mongoUri}/${DB_NAME}`);
        console.log(`Database ${conn}`);
        console.log(`Database connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB;
