import { useCounter } from "../hooks/useCounter";

export const CounterCustom = () => {
    const { counter, changeValueSum, changeValueRest, changeValueReset } = useCounter();
  return (
    <>
      <h1>CounterCustom {counter}</h1>
      <hr />
      <button onClick={changeValueSum}>+1</button>
      <button onClick={changeValueReset}>Reset</button>
      <button onClick={changeValueRest}>-1</button>
    </>
  );
};
