import axiosInstance from "./axios";

export const getBookings = async () => {
  const { data } = await axiosInstance.get("/bookings");
  return data;
};
