import React, { useEffect, useRef } from "react";
import useBookSearch from "./useBookSearch";

function WDSInfiniteScroll({}) {
  const [query, setQuery] = React.useState("");
  const [page, setPage] = React.useState(1);
  const elementRef = useRef(null);
  const observer = useRef(null);

  const { books, loading, hasMore } = useBookSearch(query, page);
  console.log(books, loading, hasMore);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      const lastElement = entries[0];
      if (lastElement.isIntersecting) {
        observer.current.unobserve(lastElement.target);
        setPage((prev) => prev + 1);
      }
    });
    if (elementRef.current) {
      observer.current.observe(elementRef.current);
    }
  }, [books]);
  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "lightblue",
            opacity: 0.5,
          }}
        ></div>
      )}
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <br />
      {books.map((book, idx) => (
        <div ref={idx === books.length - 1 ? elementRef : null} key={idx}>
          {book.title}
        </div>
      ))}
    </>
  );
}

export default WDSInfiniteScroll;
