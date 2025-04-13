import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ MONGO_URI is not defined in your .env file!");
    return;
  }

  mongoose
    .connect(uri)
    .then(() => {
      console.log("✅ Connected to database!");
    })
    .catch((err) => {
      console.error(`❌ Error connecting to database: ${err}`);
    });
};
