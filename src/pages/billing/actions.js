import { useEffect, useState } from "react";
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

export const useUsersList = (url, method, obj) => {
  const [usersList, setUsersList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setUsersList({
            usersList: res.data,
            message: "success",
            success: true,
          });
        } else {
          setUsersList({
            usersList: res.data,
            message: "success",
            success: false,
          });
        }
      } catch (error) {
        setError({
          usersList: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj]);

  return { usersList, loading, error };
};