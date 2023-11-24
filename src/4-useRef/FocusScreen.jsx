import { useRef } from "react";

export const FocusScreen = () => {
  const refInput = useRef();

  const clickInput = () => {
    refInput.current.select();
  };

  return (
    <>
      <div>FocusScreen</div>
      <hr />
      <input
        ref={refInput}
        type="text"
        name=""
        id=""
        className="from-control"
      />
      <button className="btn btn-primary" onClick={clickInput}>
        Set focus
      </button>
    </>
  );
};
