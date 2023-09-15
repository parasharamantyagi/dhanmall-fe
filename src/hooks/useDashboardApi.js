import { useEffect, useState } from "react";
import { apiCall } from "../config/api/client";
import { messages } from "../language/en";

function useDashboardApi(url, method, obj) {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setDashboardData({
            dashboardData: res.data,
            message: "success",
            success: true,
          });
        } else {
          setDashboardData({
            dashboardData: res.data,
            message: "success",
            success: true,
          });
        }
      } catch (error) {
        setError({
          dashboardData: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj]);

  return { dashboardData, loading, error };
}

export default useDashboardApi;
