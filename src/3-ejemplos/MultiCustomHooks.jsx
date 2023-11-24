import PropTypes from "prop-types";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import { LoadingComponent } from "./LoadingComponent";
import { CardComponent } from "./CardComponent";

export const MultiCustomHooks = () => {
  const { counter, changeValueSum, changeValueRest, changeValueReset } =
    useCounter(1);
  const { data, isLoading, hasError } = useFetch(
      `https://pokeapi.co/api/v2/pokemon/${counter}`
      );
 
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "baseline",
    justifyContent: "space-between",
  };

  return (
    <>
      <div>MultiCustomHooks</div>
      <hr />
      {isLoading  ? <LoadingComponent /> : <CardComponent pokemon={data} />}
      <div style={styles}>
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={changeValueRest}
        >
          before
        </button>
        <button
          className="btn btn-outline-danger btn-lg"
          onClick={changeValueReset}
        >
          reset
        </button>
        <button
          className="btn btn-outline-primary btn-lg"
          onClick={changeValueSum}
        >
          next
        </button>
      </div>
    </>
  );
};

MultiCustomHooks.propTypes = {};
