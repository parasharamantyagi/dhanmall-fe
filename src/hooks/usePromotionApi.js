import { useEffect, useState } from "react";
import { apiCall } from "../config/api/client";
import { messages } from "../language/en";

function usePromotionApi(url, method, obj) {
  const [promotionData, setDataPromotion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setDataPromotion({
            data: res.data,
            message: "success",
            success: true,
          });
        } else {
          setDataPromotion({
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

  return { promotionData, loading, error };
}

export default usePromotionApi;
