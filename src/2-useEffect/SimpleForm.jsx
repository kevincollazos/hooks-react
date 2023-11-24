import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Karl",
    email: "karlos@googe.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    return () => {};
  }, [formState]);

  return (
    <>
      <div>SimpleForm</div>
      <hr />
      <input
        type="text"
        placeholder="user name"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username === 'Karl2' && <Message />}
      <input
        type="email"
        name="email"
        placeholder="email@emai.com"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};

SimpleForm.propTypes = {};
