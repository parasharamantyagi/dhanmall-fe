import { useEffect, useState } from "react";
import { apiCall } from "./../../config/api/client";
import { messages } from "./../../language/en";
import { validValue } from "../../utils/common-utils";

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

export function useBankCardWithIdApi(url, method, obj) {
  const [bankCardDetail, setBankCardDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (validValue(obj)) {
          const res = await apiCall(method, url+'/'+obj);
          if (res.status === 1) {
            setBankCardDetail({
              bankCardDetail: res.data,
              message: "success",
              success: true,
            });
          } else {
            setBankCardDetail({
              bankCardDetail: res.data,
              message: "success",
              success: true,
            });
          }
        } else {
          setBankCardDetail({
            bankCardDetail: {},
            message: "success",
            success: true,
          });
        }
      } catch (error) {
        setError({
          bankCardDetail: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj]);

  return { bankCardDetail, loading, error };
}

export const saveBankCardApi = async (method, url, Object) => {
  try {
    const res = await apiCall(method, url, Object);
    if (res.status === 1) {
      return {
        message: res.message,
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
