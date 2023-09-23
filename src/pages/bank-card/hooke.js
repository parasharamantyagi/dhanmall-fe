import { useEffect, useState } from "react";
import { apiCall } from "./../../config/api/client";
import { messages } from "./../../language/en";

export function useBankCardApi(url, method, obj) {
  const [bankCardList, setBankCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setBankCard({
            bankCardList: res.data,
            message: "success",
            success: true,
          });
        } else {
          setBankCard({
            bankCardList: res.data,
            message: "success",
            success: true,
          });
        }
      } catch (error) {
        setError({
          bankCardList: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj]);

  return { bankCardList, loading, error };
}

export const saveBankCardApi = async (Object) => {
  try {
    const res = await apiCall("POST", "/bank-card", Object);
    if (res.status === 1) {
      return {
        message: "success",
        success: true,
      };
    } else {
      return {
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
