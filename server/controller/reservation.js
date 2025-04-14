import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reserveSchema.js";

const get_all_reservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find().sort({ date: -1, time: -1 });

    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    return next(new ErrorHandler("Failed to fetch reservations", 500));
  }
};

const send_reservation = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;

  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    // 🔍 Check if email already exists
    const existingReservation = await Reservation.findOne({ email });
    if (existingReservation) {
      return next(new ErrorHandler("A reservation with this email already exists.", 409)); // 409 = Conflict
    }

    // ✅ Create reservation
    await Reservation.create({ firstName, lastName, email, date, time, phone });

    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // 🛑 Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // 🚨 Handle other errors
    return next(error);
  }
};



export { send_reservation, get_all_reservations };

