import express from "express";
import {
  get_all_reservations,
  send_reservation,
} from "../controller/reservation.js";

const router = express.Router();

router.get("/get", get_all_reservations);
router.post("/send", send_reservation);

export default router;
