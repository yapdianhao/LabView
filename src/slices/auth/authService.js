import axios from "axios";
import { POST_USER_DETAIL } from "../../api";

const login = async (userData) => {
  const response = await axios.post(POST_USER_DETAIL, userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
