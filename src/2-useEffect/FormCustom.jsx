import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

const FormCustom = () => {
  const {formState, onInputChange, username, email, password, onResetForm} = useForm({
    username: "",
    email: "",
    password: "",
  })

//   const {username, email, password} = formState
  

  return (
    <>
      <div>FormCustom</div>
      <hr />
      <input
        id="username"
        type="text"
        placeholder="user name"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email@emai.com"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm}>Borrar datos</button>
    </>
  );
};

FormCustom.propTypes = {};

export default FormCustom;
