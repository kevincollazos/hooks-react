import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: {},
    isLoading: true,
    hasError: {},
  });

  const getPokemon = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setState({
        data,
        isLoading: false,
        hasError: {},
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getPokemon();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
