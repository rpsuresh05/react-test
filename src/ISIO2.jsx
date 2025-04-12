import { useEffect, useRef, useState } from "react";

const InfiniteScrollIO2 = () => {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);

  const observer = useRef(null);
  const lastElementRef = useRef(null); // This will attach to the last <p>

  const fetchData = async (pageNo) => {
    console.log("Fetching page", pageNo);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(pageNo - 1) * 20}`
    );
    const data = await response.json();
    setArr((prev) => [...prev, ...data.results]);
  };

  // Initial data fetch
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Observe the last element
  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        console.log("Intersected, loading next page");
        setPage((prev) => prev + 1);
      }
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [arr]);

  return (
    <div className="is-container" style={{ padding: 16 }}>
      {arr.map((each, idx) => {
        const isLast = idx === arr.length - 1;
        return (
          <p
            key={idx}
            ref={isLast ? lastElementRef : null}
            style={{ margin: "19px 0" }}
          >
            {each.name} ____{idx}____
          </p>
        );
      })}
    </div>
  );
};

export default InfiniteScrollIO2;
