import { useEffect, useState } from "react";
import { apiCall } from "../config/api/client";
import { messages } from "../language/en";

function useRechargeList(url, method, obj) {
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
}

export default useRechargeList;
