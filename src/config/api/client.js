import axios from 'axios';
import store from 'store2';

const apiHost = process.env.REACT_APP_BASE_URL;

const client = axios.create({
  baseURL: apiHost,
  headers: {
    Accept: 'application/json',
    // Authorization: 'Bearer',
  },
  timeout: 100000,
});
/**
 * Request Wrapper with default success/error actions
 */
client.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = store('authToken');
      if (token) {
        config.headers.authorization = `${token}`;
      }
    }
    return config;
  },
  (error) => console.log(error),
);

export const apiCall = function (method, route, body = null, token = null) {
  const onSuccess = function (response) {
    // console.log('Request Successful!', response);
    return response.data;
  };

  const onError = function (error) {
    console.log('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      if (error.response.status === 401) {
        console.log(error.response, '401 Unauthorized');
      }
      if (error.response.data.message === 'jwt malformed') {
        store.clear();
      }
      console.log('Data:', error.response.data);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.log('Error Message:', error.message);
    }
    const data = error.response.status === 401 ? '' : error.message;

    return Promise.reject(error.response || data);
  };

  return client({
    method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError);
};
