import { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/fa";
const Form = () => {
  const [Form, setForm] = useState({
    username: "Mariam",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Form);
  };

  const Error = () => {
    const [Error, setError] = useState({
      usernameErr: null,
      passwordErr: null,
    });
  };
  return (
    <>
      <h1>User Form</h1>
      <form className="container" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlfor="exampleInputEmail1" className="form-label">
            E-mail
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={
              ((e) =>
                setForm({
                  ...Form,
                  username: e.target.value,
                }),
              setError({
                ...Error,
                usernameErr:
                  e.target.value.length === 0 ? "This Field is required" : null,
              }))
            }
            value={Form.username}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="exampleInputPassword1" className="form-label">
            Password <AiFillEyeInvisible />
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={Form.password}
            onChange={
              ((e) =>
                setForm({
                  ...Form,
                  password: e.target.value,
                }),
              setError({
                ...Error,
                passwordErr:
                  e.target.value.length < 8
                    ? "Length must not be less than 8"
                    : null,
              }))
            }
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Form;
