import { useEffect, useState } from "react";
import { apiCall } from "../config/api/client";
import { messages } from "../language/en";

function useApi(url, method, obj) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setData({
            data: res.data,
            message: "success",
            success: true,
          });
        } else {
          setData({
            data: res.data,
            message: "success",
            success: true,
          });
        }
      } catch (error) {
        setError({
          data: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj]);

  return { data, loading, error };
}

export default useApi;
