import { useEffect, useState } from "react";

export function useFetchShop() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setLoading(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
}
