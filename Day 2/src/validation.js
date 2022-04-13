// import React, { useState, useEffect } from "react";

// function Validation() {
//   const initialValues = { email: "", password: "", username: "" };
//   const [FormValues, setFormValues] = useState(initialValues);
//   const [FormErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(FormValues));
//     setIsSubmit(true);
//   };
//   const handleChange = (e) => {
//     console.log(e.target);
//     const { name, value } = e.target;
//     setFormValues({ ...FormValues, [name]: value });
//     console.log(FormValues);
//   };

//   useEffect(() => {
//     console.log(FormErrors);
//     if (Object.keys(FormErrors).length === 0 && isSubmit) {
//       console.log(FormValues);
//     }
//   }, [FormErrors]);
//   const validate = (values) => {
//     const errors = {};

//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };
//   return <div>hello</div>;
// }
// export default Validation;
