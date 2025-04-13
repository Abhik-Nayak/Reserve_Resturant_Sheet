import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";

// Load environment variables first
dotenv.config(); // must be at the very top before using any process.env

const app = express();
const PORT = process.env.PORT || 5000; // fallback port if not set

// Middleware
app.use(cors());
app.use(express.json());
dbConnection();

// Routes
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
