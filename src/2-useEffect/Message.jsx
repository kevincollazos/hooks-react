import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div>Message</div>
      <h3>usuario ya existe</h3>
      <hr />
      <div>{JSON.stringify(coords)}</div>
    </>
  );
};
