import { useEffect, useRef, useState } from "react";
let page = 1;
const InfiniteScrollIO = () => {
  // const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);

  const triggerRef = useRef(false);
  const ref = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    const lastElement = entries[0];
    console.log("IO_Entries", entries);
    console.log("IO_Page", page);

    if (lastElement.isIntersecting && lastElement) {
      console.log("IO_isIntersecting");
      observer.unobserve(lastElement.target);
      fetchData(page + 1).then((data) => {
        page += 1;
        console.log("IO_isIntersecting fetchData", page);
        // observer.observe(document.getElementById(`listItem-${arr.length - 1}`));
      });
    }
  });

  // useEffect(() => {
  //   console.log("Enter IO_Ref", ref.current);
  //   if (ref.current) {
  //     console.log("IO_Ref", ref.current);
  //     observer.observe(ref.current);
  //   }
  // }, [ref.current]);

  useEffect(() => {
    console.log(
      "Enter IO_Ref arr",
      document.getElementById(`listItem-${arr.length - 1}`)
    );
    if (document.getElementById(`listItem-${arr.length - 1}`)) {
      observer.observe(document.getElementById(`listItem-${arr.length - 1}`));
    }
  }, [arr]);

  const fetchData = async function (pageNo) {
    console.log("IO_page change fetchData", pageNo);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=${
        (pageNo - 1) * 20
      }`
    );
    const data = await response.json();

    setArr([...arr, ...data.results]);
    triggerRef.current = false;
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  console.log(arr, Array.isArray(arr), "ARR>>");
  return (
    <>
      <div
        style={{
          backgroundColor: triggerRef.current ? "lightsalmon" : "white",
        }}
        className="is-container"
      >
        {arr.map((each, idx) => (
          <p id={`listItem-${idx}`} key={idx}>
            {each.name} ____{idx}____
            {arr.length - 1}
          </p>
        ))}
      </div>
    </>
  );
};

export default InfiniteScrollIO;
