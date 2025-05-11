import { useEffect, useRef, useState } from "react";

const config = [
  {
    color: "red",
    displayOrder: 2,
    lightOrder: 2,
    duration: 8,
  },
  {
    color: "yellow",
    displayOrder: 1,
    lightOrder: 1,
    duration: 5,
  },
  {
    color: "green",
    displayOrder: 3,
    lightOrder: 3,
    duration: 12,
  },
];

function TrafficLights(props) {
  const [active, setActive] = useState(null);
  const timerRef = useRef(null);
  const [display, setDisplay] = useState([]);
  const [light, setLight] = useState([]);
  useEffect(() => {
    const displayArray = config.sort((a, b) => a.displayOrder - b.displayOrder);
    const lightArray = Array(config.length).fill(null);

    config.forEach((each, idx) => (lightArray[each.lightOrder - 1] = idx));

    console.log(displayArray, lightArray);

    setDisplay(displayArray);
    setLight(lightArray);
    setActive(0);
  }, []);

  useEffect(() => {
    if (active == null) return;
    const currentBlub = config[light[active]];
    // console.log("toACTIVE", { currentBlub, active, timerId: timerRef.current });
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % light.length);
    }, currentBlub.duration * 1000);
    console.log("ACTIVE", {
      currentBlub,
      active,
      timerId: timerRef.current,
    });
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [active]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      {display.map((each) => (
        <>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "1px solid",
              background: each.color,
              opacity: config[light[active]].color == each.color ? 0.8 : 0.2,
            }}
            key={each.lightOrder}
          ></div>
        </>
      ))}
    </div>
  );
}

export default TrafficLights;
// https://grok.com/share/c2hhcmQtMg%3D%3D_91d04b6a-fb17-4a57-b33d-234fce91ce41
