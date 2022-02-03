import { useEffect, useState } from "react";

const useRandomQuote = () => {
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
  }, []);

  return quote;
};

export default useRandomQuote;
