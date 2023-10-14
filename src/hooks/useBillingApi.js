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
  const [billingGame, setBillingGame] = useState({billingGame: {
    game_id: {
      _id: 0,
      date: 0,
      period: "000",
      begintime: 0,
      detail: { set_unit: 0, set_value: 0 },
    },
    total_price: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_red: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_green: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_violet: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_0: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_1: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_2: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_3: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_4: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_5: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_6: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_7: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_8: { total_amount: 0, total_delivery: 0, pick_count: 0 },
    pick_9: { total_amount: 0, total_delivery: 0, pick_count: 0 },
  }});
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