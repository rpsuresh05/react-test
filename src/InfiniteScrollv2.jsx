import { useEffect, useRef, useState } from "react";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);

  const [isFetching, setFetching] = useState(false);

  // let isFetching = false;

  useEffect(() => {
    const handleScroll = function (e) {
      let div = e.target;
      console.log(
        div.clientHeight + 40 + div.scrollTop,
        {
          clientHeight: div.clientHeight,
          scrollTop: div.scrollTop,
          scrollHeight: div.scrollHeight,
        },
        "SCRL"
      );
      if (
        div.clientHeight + 40 + div.scrollTop >= div.scrollHeight &&
        !isFetching
      ) {
        console.log("\tIncreasing page", page);
        setFetching(true);
        setPage((page) => page + 1);
      } else {
        // triggered = false;
      }
    };
    const divElement = document.querySelector("div.is-container");

    divElement.addEventListener("scroll", handleScroll);

    return () => {
      divElement.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching]);

  useEffect(() => {
    const fetchData = async function () {
      console.log("page change fetchData", page);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=${
          (page - 1) * 20
        }`
      );
      const data = await response.json();

      setArr([...arr, ...data.results]);
      setFetching(false);
    };
    console.log("page change", page);
    fetchData();
  }, [page]);
  console.log(arr, "ARR>>");
  return (
    <>
      <div
        style={{ backgroundColor: isFetching ? "lightsalmon" : "white" }}
        className="is-container"
      >
        {arr.map((each, idx) => (
          <p key={idx}>{each.name}</p>
        ))}
      </div>
    </>
  );
};

export default InfiniteScroll;
