import { useEffect, useState } from "react";

const useRandomQuote = (i) => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchKanyeQuote = async () =>
      await fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((data) => {
          setQuote(data.quote);
        })
        .catch((error) => {
          console.error(error);
        });

    fetchKanyeQuote();
  }, [i]);

  return quote;
};

export default useRandomQuote;
