import useTimer from "./useTimer";

function Timer() {
  const { seconds, start, stop, isRunning } = useTimer(15);

  return (
    <>
      <h3>{seconds}</h3>
      <p>Timer is currently {isRunning ? "running" : "not running"}</p>
      <button onClick={() => start()}>start</button>
      <button onClick={() => stop()}>stop</button>
    </>
  );
}

export default Timer;
