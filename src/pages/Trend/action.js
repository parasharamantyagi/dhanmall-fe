import { useEffect, useState } from "react";
import { apiCall } from "../../config/api/client";
import { messages } from "../../language/en";

export const useGameHistory = (url, method, obj) => {
  const [gameHistory, setGameHistory] = useState({
    gameHistory: {
      pick_red: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_green: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_violet: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_0: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_1: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_2: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_3: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_4: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_5: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_6: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_7: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_8: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      pick_9: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      total_price: {
        total_amount: 0,
        total_delivery: 0,
        pick_count: 0,
      },
      game_budget: {
        total_amount: 0,
        total_delivery: 0,
        winner_pick_count: 0,
        loser_pick_count: 0,
      },
      _id: "6527da22981f2c1fd0b75ed7",
      game_id: {
        detail: {
          set_unit: 0,
          set_value: 0,
        },
        _id: "0",
        project_id: 1,
        period: "0",
        price: 0,
        invest_price: "0",
        date: 0,
        begintime: 0,
        status: 0,
        __v: 0,
      },
      date: 0,
      __v: 0,
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setGameHistory({
            gameHistory: res.data[1],
            message: "success",
            success: true,
          });
        } else {
          setGameHistory({
            gameHistory: {},
            message: "success",
            success: false,
          });
        }
      } catch (error) {
        setError({
          gameHistory: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, method, obj]);
  return { gameHistory, loading, error };
};
