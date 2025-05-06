import { useState, useEffect } from 'react';
import axios from 'axios';

export const useExchangeRate = (fromCurrency, toCurrency) => {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setRate(1);
      return;
    }

    const fetchRate = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        setRate(response.data.rates[toCurrency]);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  return { rate, loading, error };
};