import React, { useState, useEffect, useRef } from "react";

function TimerCounter() {
  const [count, setCount] = useState(0);
  const [isPaused, setPause] = useState(true);
  const [history, setHistory] = useState([]);
  const intervalRef = useRef();

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isPaused]);
  // console.log(history);

  return (
    <div>
      <button onClick={() => setPause(!isPaused)}>
        {!isPaused ? "STOP" : "START"}
      </button>
      <button onClick={() => setCount(0)}> RESET TIMER</button>
      <div>{count}</div>
      <button onClick={() => setHistory([...history, count])}> LAP </button>
      <button onClick={() => setHistory([])}> RESET HISTORY</button>

      <button
        onClick={() => {
          setCount(0);
          setHistory([]);
        }}
      >
        RESET{" "}
      </button>

      <div>
        <p>
          Lap Timings:
          {history.map((h) => (
            <div key={h}> {h} </div>
          ))}
        </p>
      </div>
    </div>
  );
}

export default TimerCounter;
