import {useState, useCallback} from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, {method, body, headers});
        const data = await response.json();
        const message = data.message;

        if (!response.ok) {
          throw new Error(data.errors ? data.errors[0].msg : data.message || 'Something is wrong http.hook.js')
        }
        setLoading(false);

        message && setSuccessMessage(message);

        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    }, []);

  const clearError = useCallback(() => {
    setError(null);
    setSuccessMessage(null)
  }, []);

  return {loading, request, error, clearError, successMessage}
}