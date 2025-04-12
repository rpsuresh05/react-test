import React, { useState, useEffect } from "react";

export const ISV4 = () => {
  const [count, setCount] = useState(1);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching page:", count);
      setLoading(true);

      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${(count - 1) * 50}`
      );
      const data = await response.json();

      setArr((prevArr) => [...prevArr, ...data.results]);
      setLoading(false);
    };

    fetchData();
  }, [count]);

  console.log("PAGE:::", count);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 0 &&
        !loading
      ) {
        console.log("Increasing page..");
        setCount((prevCount) => prevCount + 1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading]);

  return (
    <div>
      {arr.map((item, idx) => (
        <div style={{ padding: 10, borderBottom: "1px solid #eee" }} key={idx}>
          {item.name}
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};
