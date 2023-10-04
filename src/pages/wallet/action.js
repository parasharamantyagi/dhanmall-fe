import { apiCall } from "../../config/api/client";
import { messages } from "../../language/en";
import {
  strictValidArrayWithLength,
  validObjectWithParameterKeys,
} from "../../utils/common-utils";

export const addRechargeService = async (data) => {
  try {
    const res = await apiCall("POST", "/recharge", data);
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
    let message = messages.DEFAULT_ERROR_MESSAGE;
    if (
      validObjectWithParameterKeys(error, ["data"]) &&
      validObjectWithParameterKeys(error.data, ["errors"])
    ) {
      if (
        strictValidArrayWithLength(error.data.errors) &&
        validObjectWithParameterKeys(error.data.errors[0], ["msg"])
      ) {
        message = error.data.errors[0].msg;
      }
    }
    return {
      data: error.response,
      message: message,
      success: false,
    };
  }
};

export const addWithdrawRequest = async (data) => {
  try {
    const res = await apiCall("POST", "/withdraw-request", data);
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
    let message = messages.DEFAULT_ERROR_MESSAGE;
    if (
      validObjectWithParameterKeys(error, ["data"]) &&
      validObjectWithParameterKeys(error.data, ["errors"])
    ) {
      if (
        strictValidArrayWithLength(error.data.errors) &&
        validObjectWithParameterKeys(error.data.errors[0], ["msg"])
      ) {
        message = error.data.errors[0].msg;
      }
    }
    return {
      data: error.response,
      message: message,
      success: false,
    };
  }
};
