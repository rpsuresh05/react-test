import React, { useEffect, useState, useRef, useCallback } from "react";

export const InfiniteScrollIO = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observer = useRef(null);
  const loaderRef = useRef(null); // 👈 Sentinel

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`
    );
    const data = await res.json();

    setItems((prev) => [...prev, ...data.results]);
    setPage((prev) => prev + 1);
    setHasMore(data.next !== null); // PokeAPI returns `next` if more data
    setLoading(false);
  }, [page, hasMore, loading]);

  useEffect(() => {
    if (!loaderRef.current) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        fetchData();
      }
    });

    observer.current.observe(loaderRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [fetchData]);

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ padding: 10, borderBottom: "1px solid #eee" }}
        >
          {item.name}
        </div>
      ))}

      {/* 👇 Sentinel */}
      <div ref={loaderRef} style={{ padding: "20px", textAlign: "center" }}>
        {loading
          ? "Loading..."
          : hasMore
          ? "Scroll down to load more"
          : "No more items"}
      </div>
    </div>
  );
};
