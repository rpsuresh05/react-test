import { useEffect, useRef, useState } from "react";

const config = [
  { color: "red", duration: 8 },
  { color: "yellow", duration: 5 },
  { color: "green", duration: 12 },
];

function TrafficLights() {
  const timerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const currentLight = config[active];
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % config.length);
    }, currentLight.duration * 1000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [active]);

  if (!config.length) {
    return <div>No traffic lights configured</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
      {config.map((light, index) => (
        <div
          key={light.color}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: "1px solid",
            background: light.color,
            opacity: active === index ? 0.8 : 0.2,
          }}
          role="status"
          aria-label={`${light.color} light ${
            active === index ? "active" : "inactive"
          }`}
        />
      ))}
    </div>
  );
}

export default TrafficLights;
