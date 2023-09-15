import store from "store2";
import { apiCall } from "../../config/api/client";
import { messages } from "../../language/en";

export const loginService = async (data) => {
  try {
    const res = await apiCall("POST", "/login", data);
    if (res.status === 1) {
      store({
        authToken: res.token,
      });
      return {
        data: res,
        message: "",
        success: true,
      };
    } else {
      return {
        data: res,
        message: "Invalid Email Password",
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
