import { useEffect, useRef, useState } from "react";

const config = [
  {
    color: "red",
    duration: 8,
  },
  {
    color: "yellow",
    duration: 5,
  },
  {
    color: "green",
    duration: 12,
  },
];

function TrafficLights(props) {
  const timerRef = useRef(null);

  const [active, setActive] = useState(null);
  useEffect(() => {
    setActive(0);
  }, []);

  useEffect(() => {
    if (active == null) return;
    const currentBlub = config[active];
    // console.log("toACTIVE", { currentBlub, active, timerId: timerRef.current });
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % config.length);
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

  console.log(config, "CONFIG..", active);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      {active != null &&
        config.map((each) => (
          <>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                border: "1px solid",
                background: each.color,
                opacity: config[active].color == each.color ? 0.8 : 0.2,
              }}
              key={each.color}
            ></div>
          </>
        ))}
    </div>
  );
}

export default TrafficLights;
