import axios from "../../utils/axios";

export const getWishlistAction = () => ({
  type: "GET_WISHLIST",
  payload: axios.get("/api/wishlist/?page=1&limit=100"),
});
