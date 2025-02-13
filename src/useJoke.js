import { useState, useEffect, useCallback } from "react";

function useJoke() {
  const [frase, setFrase] = useState(null);
  const [error, setError] = useState(null);

  const fetchJoke = useCallback(() => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setFrase(data.value))
      .catch((err) => setError(err.message));
  }, []);

  return { frase, error, refetch: fetchJoke };
}

export default useJoke;
