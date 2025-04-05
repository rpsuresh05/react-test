import { useEffect, useRef, useState } from "react";
import "./InfiniteScroll.css";

const InfiniteScrollv2 = () => {
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);

  // const triggerRef = useRef(false);
  // console.log(triggerRef.current);
  const fetchData = async function (pageNo) {
    console.log("page change fetchData", pageNo);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=${
        (pageNo - 1) * 20
      }`
    );
    const data = await response.json();

    setArr([...arr, ...data.results]);
  };
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
      if (div.clientHeight + 40 + div.scrollTop >= div.scrollHeight) {
        console.log("\tIncreasing page", page);
        setPage((page) => {
          const next = page + 1;
          console.log("NEXT>>>", next);
          fetchData(next).then((data) => {});

          return next;
        });
      }
    };
    const divElement = document.querySelector("div.is-container");

    divElement.addEventListener("scroll", handleScroll);
    fetchData(1);
    return () => {
      divElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {

  //   console.log("page change", page);
  //   fetchData();

  // }, [page]);
  console.log(arr, "ARR>>");
  return (
    <>
      <div className="is-container">
        {arr.map((each, idx) => (
          <p key={idx}>{each.name}</p>
        ))}
      </div>
    </>
  );
};

export default InfiniteScrollv2;
