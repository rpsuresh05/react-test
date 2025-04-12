import React, { useEffect } from "react";

const useBookSearch = (query, page) => {
  const [books, setBooks] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState({});

  useEffect(() => {
    setError({});
    setLoading(true);
    fetch(`http://openlibrary.org/search.json?q=${query}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (page == 1) {
          setBooks(data.docs);
        } else {
          setBooks((prevBooks) => {
            return [...prevBooks, ...data.docs];
          });
        }
        if (data.length) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);
  console.log("__BOOKS", books);

  return { books, hasMore, loading, error };
};

export default useBookSearch;
