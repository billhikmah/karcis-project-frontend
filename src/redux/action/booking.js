import axios from "../../utils/axios";

export const getBookingAction = () => ({
  type: "GET_BOOKING",
  payload: axios.get("/api/booking"),
});
