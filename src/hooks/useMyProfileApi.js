import { useEffect, useState } from "react";
import { apiCall } from "../config/api/client";
import { messages } from "../language/en";

function useMyProfileApi(url, method, obj) {
  // const [promotionData, setDataPromotion] = useState(null);
  const [myProfileData, setMyProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall(method, url, obj);
        if (res.status === 1) {
          setMyProfileData({
            myProfile: res.data,
            message: "success",
            success: true,
          });
        } else {
          setMyProfileData({
            myProfile: res.data,
            message: "success",
            success: true,
          });
        }
      } catch (error) {
        setError({
          myProfile: error.response,
          message: messages.DEFAULT_ERROR_MESSAGE,
          success: false,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, obj]);

  return { myProfileData, loading, error };
}

export default useMyProfileApi;
