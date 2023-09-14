import { apiCall } from "../../config/api/client";
import { messages } from "../../language/en";

export const orderService = async () => {
  try {
    const res = await apiCall("GET", "/order");
    if (res.status === 1) {
      //   console.log("Login Sucessfully =>", res);
      return {
        data: res.data,
        message: "success",
        success: true,
      };
    } else {
      //   console.log("Invalid Email Password");
      return {
        data: { game_history: [], game_page: 1 },
        message: "",
        success: false,
      };
    }
  } catch (error) {
    return {
      data: error.response,
      message: messages.DEFAULT_ERROR_MESSAGE,
      success: false,
    };
  }
};
