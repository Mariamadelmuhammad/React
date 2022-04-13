import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";

import Visibility from "@material-ui/icons/Visibility";

import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
const SecondForm = () => {
  const [SecondForm, setSecondForm] = useState({
    name: "Mariam",
    email: "xxxx@gmail.com",
    username: "mariamadel",
    password: "P@ssword1234",
    confirmpassword: "P@ssword1234",
  });

  const [SecondErrors, setSecondErrors] = useState({
    nameerr: null,
    emailerr: null,
    usernameerr: null,
    passworderr: null,
    confirmpassworderr: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(SecondForm);
  };
  const validEmail = new RegExp(
    // "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/i
  );
  // const validPassword = new RegExp("[a-zA-Z0-9]{8}");
  // !/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/i
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setSecondForm({
        ...SecondForm,
        name: e.target.value,
      });

      setSecondErrors({
        ...SecondErrors,
        nameerr: e.target.value.length === 0 ? "This Field is required" : null,
      });
    } else if (e.target.name === "email") {
      setSecondForm({
        ...SecondForm,
        email: e.target.value,
      });
      setSecondErrors({
        ...SecondErrors,
        emailerr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value != validEmail.test
            ? "not valid email"
            : "valid",
      });
    } else if (e.target.name === "username") {
      setSecondForm({
        ...SecondForm,
        username: e.target.value,
      });
      setSecondErrors({
        ...SecondErrors,
        usernameerr:
          e.target.value.length === 0
            ? "This Field is required"
            : ({ SecondForm }.value = " "
                ? "username shouldn't contain spaces"
                : null),
      });
    } else if (e.target.name === "password") {
      setSecondForm({
        ...SecondForm,
        password: e.target.value,
      });
      setSecondErrors({
        ...SecondErrors,
        passworderr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value.length < 8
            ? "Length must not be less than 8"
            : (e.target.value =
                !/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/i
                  ? "not valid password"
                  : null),
      });
    } else if (e.target.name === "confirmpassword") {
      setSecondForm({
        ...SecondForm,
        confirmpassword: e.target.value,
      });
      setSecondErrors({
        ...SecondErrors,
        confirmpassworderr:
          e.target.value.length === 0
            ? "This Field is required"
            : e.target.value != SecondForm.password
            ? "password doesn't match "
            : null,
      });
    }
  };
  // ********************************************************************
  const handleClickShowPassword = () => {
    setSecondForm({ ...SecondForm, showPassword: !SecondForm.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setSecondForm({ ...SecondForm, [prop]: event.target.value });
  };


  // ***********************************************************
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            // placeholder="Name"
            onChange={(e) => handleChange(e)}
            name="name"
            value={SecondForm.name}
          />
        </div>
        <small className="text-danger">{SecondErrors.nameerr}</small>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">E-mail</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="E-mail"
            name="email"
            onChange={(e) => handleChange(e)}
            value={SecondForm.email}
          />
        </div>
        <small className="text-danger">{SecondErrors.emailerr}</small>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name"
            onChange={(e) => handleChange(e)}
            name="username"
            value={SecondForm.username}
          />
        </div>
        <small className="text-danger">{SecondErrors.usernameerr}</small>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            type={SecondForm.showPassword ? "text" : "password"}
            onChange={handlePasswordChange("password")}
            value={SecondForm.password}
            name="password"
            value={SecondForm.password}
          />
          <IconButton
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {SecondForm.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
        <small className="text-danger">{SecondErrors.passworderr}</small>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            name="confirmpassword"
            value={SecondForm.confirmpassword}
          />
        </div>
        <small className="text-danger">{SecondErrors.confirmpassworderr}</small>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default SecondForm;
