import { useEffect, useState } from "react";
import { apiCall } from "../config/api/client";
import { messages } from "../language/en";
import { useDispatch } from "react-redux";
import { saveProfile } from "../redux/reducer/profile.reducer";

function useMyProfileApi() {
  const dispatch = useDispatch();
  const [myProfileData, setMyProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await apiCall('GET', '/profile', {});
        if (res.status === 1) {
          setMyProfileData({
            myProfile: res.data,
            message: "success",
            success: true,
          });
          dispatch(saveProfile(res.data));
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
  }, [dispatch]);

  return { myProfileData, loading, error };
}

export default useMyProfileApi;
