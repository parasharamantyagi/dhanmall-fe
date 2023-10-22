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

export const useGamesContribution = (url, method, obj) => {
  const [gamesContribution, setGamesContribution] = useState({gamesContribution: {invest_price: 0,delivery_price: 0}});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const res = await apiCall(method, url, obj);
      if (res.status === 1) {
        setGamesContribution({
          gamesContribution: res.data,
          message: 'success',
          success: true,
        });
      } else {
        setGamesContribution({
          gamesContribution: res.data,
          message: 'success',
          success: false,
        });
      }
    } catch (error) {
      setError({
        gamesContribution: error.response,
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

  return { gamesContribution, loading, error, recallApi };
};

export const useTotalGame = (url, method, obj) => {
  const [totalGames, setTotalGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const res = await apiCall(method, url, obj);
      if (res.status === 1) {
        setTotalGames({
          totalGames: res.data,
          message: 'success',
          success: true,
        });
      } else {
        setTotalGames({
          totalGames: res.data,
          message: 'success',
          success: false,
        });
      }
    } catch (error) {
      setError({
        totalGames: error.response,
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

  return { totalGames, loading, error, recallApi };
};

export const useBillingUserChild = (url, method, obj) => {
  const [billingUserChild, setBillingUserChild] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const res = await apiCall(method, url, obj);
      if (res.status === 1) {
        setBillingUserChild({
          billingUserChild: res.data,
          message: 'success',
          success: true,
        });
      } else {
        setBillingUserChild({
          billingUserChild: res.data,
          message: 'success',
          success: false,
        });
      }
    } catch (error) {
      setError({
        billingUserChild: error.response,
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

  return { billingUserChild, loading, error, recallApi };
};