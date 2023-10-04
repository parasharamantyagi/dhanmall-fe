import { apiCall } from "../../config/api/client";
import { messages } from "../../language/en";

export const useRechargeDetail = async (url, method, obj = {}) => {
  try {
    const res = await apiCall(method, url, obj);
    if (res.status === 1) {
      return {
        data: res.data,
        message: "success",
        success: true,
      };
    } else {
      return {
        data: {},
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
