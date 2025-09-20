import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URI) return console.log("MongoDb URI not found");
  if (isConnected) return console.log("Using the existing database connection");
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log(`database connected : ${dbConnection.connection.host}`);
  } catch (error) {
    console.log(`database connection failed: ${error}`);

  }
};
