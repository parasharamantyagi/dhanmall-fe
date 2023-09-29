import { useEffect, useState } from 'react';
import { apiCall } from '../config/api/client';
import { messages } from '../language/en';

function useApi(url, method, obj) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to make the API call
  const fetchData = async () => {
    try {
      const res = await apiCall(method, url, obj);
      if (res.status === 1) {
        setData({
          data: res.data,
          message: 'success',
          success: true,
        });
      } else {
        setError({
          data: res.data,
          message: 'success',
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
  };

  // Initial API call when the hook is first used
  useEffect(() => {
    fetchData();
  }, [url, method, obj]);

  // Function to recall the API call
  const recallApi = () => {
    // Reset data and error states
    setData(null);
    setError(null);
    // Set loading to true to indicate a new API call
    setLoading(true);
    // Call fetchData again with the same parameters
    fetchData();
  };

  return { data, loading, error, recallApi };
}

export default useApi;
