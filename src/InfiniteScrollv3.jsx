import React, { useState, useEffect, useCallback } from "react";

const InfiniteScrollv3 = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    fetch(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`)
      .then((res) => res.json())
      .then((data) => setItems([...items, ...data]))
      .catch((err) => console.log(err));
    setIndex((prevIndex) => prevIndex + 1);

    setIsLoading(false);
  }, [index, isLoading]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=10&limit=12"
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);
  console.log(items, "items");
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id}>{JSON.stringify(item)}</div>
        ))}
      </div>
      {isLoading && <>Loading...</>}
    </div>
  );
};

export default InfiniteScrollv3;
