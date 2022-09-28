import { useState, useEffect } from "react";
import { useAuth } from "../contexts/authProvider";
import api from "../services/api";

export function useFetch<T = unknown>(url: string) {
  const { user } = useAuth();
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    api
      .get(url)

      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [user]);

  return { data, error };
}
