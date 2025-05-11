import { useCallback, useRef, useState } from "react";

function calculateDistance(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function OverlappingCircles() {
  const containerRef = useRef(null);
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [circles, setCircles] = useState([]);
  const [past, setPast] = useState([]);

  const handlePointerMove = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    // console.log(e, "POINTER MOVE");
    const x = e.clientX - rect.left - 20;
    const y = e.clientY - rect.top - 20;
    setCoord({ x, y });
  }, []);
  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={(e) => {
        console.log("onPointerDown", e);
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - 20;
        const y = e.clientY - rect.top - 20;
        const newPast = [];

        const centerX = e.clientX - rect.left;
        const centerY = e.clientY - rect.top;

        let isInter = false;
        past.forEach(({ x: a, y: b }) => {
          console.log("INTERSECTING__CHK", { x, y, a, b });
          newPast.push({ x: a, y: b });
          const centerA = a + 20;
          const centerB = b + 20;

          if (calculateDistance(centerX, centerA, centerY, centerB) <= 40) {
            isInter = true;
            console.log("INTERSECTING!!");
            alert("INTERSECTING !");
          }
          //   if (
          //     ((x >= a && x <= a + 40) || (x + 40 >= a && x + 40 <= a + 40)) &&
          //     ((y >= b && y <= b + 40) || (y + 40 >= b && y + 40 <= b + 40))
          //   ) {
          //     isInter = true;
          //     console.log("INTERSECTING");
          //   }
        });

        newPast.push({ x, y });

        setPast(newPast);
        const tempArray = [
          ...circles,
          <div
            key={circles.length}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: e.button == 0 ? "red" : isInter ? "red" : "green",
              position: "absolute",
              transform: `translate3d(${x}px, ${y}px, 0)`,
              //   borderRadiu
            }}
          ></div>,
        ];

        setCircles(tempArray);
      }}
      onMouseDown={(e) => {
        console.log("onMouseDown", e);
      }}
      onDrag={(e) => {
        console.log("onDrag", e);
      }}
      onDragStart={(e) => {
        console.log("onDragStart", e);
      }}
      onDragEnd={(e) => {
        console.log("onDragEnd", e);
      }}
      className="container"
    >
      <div
        style={{
          width: 40,
          height: 40,
          background: "orange",
          borderRadius: "50%",
          position: "absolute",
          transform: `translate3d(${coord.x}px, ${coord.y}px, 0)`,
        }}
      ></div>
      {circles}
    </div>
  );
}

export default OverlappingCircles;

// https://grok.com/share/c2hhcmQtMg%3D%3D_2c379d4e-8109-491c-8897-3a17178d2aa9
