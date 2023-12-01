import { useEffect, useState } from 'react';
import { apiCall } from '../config/api/client';
import { messages } from '../language/en';

export const useRechargeList = (url, method, obj) => {
  const [rechargeList, setRechargeLists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const res = await apiCall(method, url, obj);
      if (res.status === 1) {
        setRechargeLists({
          rechargeList: res.data,
          message: 'success',
          success: true,
        });
      } else {
        setRechargeLists({
          rechargeList: res.data,
          message: 'success',
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

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, obj]);

  const recallApi = () => {
    setError(null);
    // Set loading to true to indicate a new API call
    setLoading(true);
    // Call fetchData again with the same parameters
    fetchData();
  };

  return { rechargeList, loading, error, recallApi };
};

export const useBillingGameNowList = (url, method, obj) => {
  const [billingGame, setBillingGame] = useState({
    billingGame: {
      game_id: {
        _id: 0,
        date: 0,
        period: '000',
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
    },
    game_record: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setBillingGame({
            billingGame: res.data.current_game,
            game_record: res.data.game_record,
            message: 'success',
            success: true,
          });
        } else {
          setBillingGame({
            billingGame: billingGame.billingGame,
            game_record: billingGame.game_record,
            message: 'success',
            success: false,
          });
        }
      } catch (error) {
        setError({
          billingGame: error.response,
          game_record: billingGame.game_record,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj, billingGame.billingGame, billingGame.game_record]);

  return { billingGame, loading, error };
};
