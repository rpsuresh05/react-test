import { useRef, useState } from "react";

function useTimer(totalTime) {
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  const [time, setTime] = useState(totalTime);

  const start = () => {
    const timerId = setInterval(() => {
      setTime((t) => {
        if (t - 1 == 0) stop();
        return t - 1;
      });
    }, 1000);
    timerRef.current = timerId;
    setIsRunning(true);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    timerRef.current = null;
    setTime(totalTime);
  };

  return { start, stop, isRunning, seconds: time };
}

export default useTimer;
