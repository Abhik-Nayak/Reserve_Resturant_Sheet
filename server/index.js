import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import reservationRouter from "./routes/reservationRoute.js";
import { errorMiddleware } from "./middlewares/error.js";

// Load environment variables first
dotenv.config(); // must be at the very top before using any process.env

const app = express();
const PORT = process.env.PORT || 8081; // fallback port if not set

// Middleware
app.use(
  cors({
    origin: "https://reserve-resturant-sheet.vercel.app/", // or whatever your frontend URL is
    credentials: true, // required if you're using cookies or auth headers
  })
);
app.use(cors());
app.use(express.json());
dbConnection();

// Routes
app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(errorMiddleware);