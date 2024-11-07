import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environment var in .env');
}

async function conn() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB found and connected~');
  } catch (error) {
    console.error(':( Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default conn;