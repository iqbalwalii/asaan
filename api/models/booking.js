const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  alternate_phone: {
    type: String,
    required: true,
  },
  address_1: {
    type: String,
    required: true,
  },
  address_2: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  pincode: {
    type: String,
    required: true,
  },

  payment_mode: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("bookings", BookingSchema);
