import { useState } from "react"

export const useCounter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);
    const changeValueSum = () => {
        setCounter(counter + 1 )
    };
    const changeValueRest = () => {
        setCounter(counter - 1 )
    };
    const changeValueReset = () => {
        setCounter(initialValue )
    };
  return {
    counter,
    changeValueSum,
    changeValueRest,
    changeValueReset
  }
}
