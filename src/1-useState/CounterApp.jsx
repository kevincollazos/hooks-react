import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = count;
  return (
    <>
      <h1>CounterApp: {counter1}</h1>
      <h1>CounterApp2: {counter2}</h1>
      <h1>CounterApp3: {counter3}</h1>
      <hr />
      <button onClick={() => setCount({ ...count, counter1: counter1 + 1 })}>
        +1
      </button>
    </>
  );
};
