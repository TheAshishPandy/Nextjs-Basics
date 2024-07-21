// lib/mongoose.ts
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    const DB_Options = {
      dbName: process.env.DBNAME,
      authSource: process.env.DBAUTHSOURCE,
      user: process.env.DBUSER,
      pass: process.env.DBPASSWORD,
    };

    console.log("Attempting to connect to database...");
    await mongoose.connect(process.env.DATABASE_URL, DB_Options);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectToDatabase;
