import { useEffect, useState } from "react";
import { apiCall } from "../config/api/client";
import { messages } from "../language/en";

export const useRechargeList = (url, method, obj) => {
  const [rechargeList, setRechargeLists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setRechargeLists({
            rechargeList: res.data,
            message: "success",
            success: true,
          });
        } else {
          setRechargeLists({
            rechargeList: res.data,
            message: "success",
            success: false,
          });
        }
      } catch (error) {
        setError({
          rechargeList: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj]);

  return { rechargeList, loading, error };
};


export const useBillingGameNowList = (url, method, obj) => {
  const [billingGame, setBillingGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setBillingGame({
            billingGame: res.data,
            message: "success",
            success: true,
          });
        } else {
          setBillingGame({
            billingGame: res.data,
            message: "success",
            success: false,
          });
        }
      } catch (error) {
        setError({
          billingGame: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj]);

  return { billingGame, loading, error };
};