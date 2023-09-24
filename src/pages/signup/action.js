import store from "store2";
import { apiCall } from "../../config/api/client";
import { messages } from "../../language/en";

export const registerService = async (data) => {
  try {
    const res = await apiCall("POST", "/register", data);
    if (res.status === 1) {
      store({
        authToken: res.token,
      });
      return {
        data: res,
        message: res.message,
        success: true,
      };
    } else {
      return {
        data: res,
        message:  res.message,
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

export const verifyOtpService = async (data) => {
  try {
    const res = await apiCall("POST", "/otp", data);
    if (res.status === 1) {
      return {
        data: res,
        message: res.message,
        success: true,
      };
    } else {
      return {
        data: res,
        message: res.message,
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
