// import React from "react";

// import { DatePicker } from "antd";
// import "./Reg.css";
// import "antd/dist/antd.css";
// import {
//   Form,
//   Input,
//   Button,
//   Checkbox,
//   Select,
//   Cascader,
//   Tooltip,
//   // Alert,
//   // Steps,
// } from "antd";
// import FloatingWhatsApp from "react-floating-whatsapp";
// import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
// const { Option } = Select;

// // const validEmail = new RegExp(
// //   /(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)/i
// // );
// // const validPassword = new RegExp("[a-zA-Z0-9]{8}");
// // !/^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/i;
// // const { Step } = Steps;

// const options = [
//   {
//     value: "Cairo",
//     label: "Cairo",
//     children: [
//       {
//         value: "test",
//         label: "test",
//         children: [
//           {
//             value: "xihu",
//             label: "West Lake",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "Alexandria",
//     label: "Alexandria",
//     children: [
//       {
//         value: "nanjing",
//         label: "Nanjing",
//         children: [
//           {
//             value: "zhonghuamen",
//             label: "Zhong Hua Men",
//           },
//         ],
//       },
//     ],
//   },
// ];

// class RegisterForm extends React.Component {
//   render() {
//     return (
//       <>
//         <div className="container">
//           <div className="d-flex justify-content-center h-100">
//             <div className="card">
//               <div className="card-header text-center">
//                 <h3>Register</h3>
//                 <a>
//                   <FloatingWhatsApp
//                     phoneNumber="+20 1204822114"
//                     accountName="Mina Emad"
//                     allowClickAway="true"
//                     notification
//                     notificationDelay={60000}
//                     notificationSound
//                     id="whats"
//                   />
//                 </a>
//               </div>
//               <div className="card-body">
//                 {/* {Object.keys(FormErrors).length === 0 && isSubmit ? (
//                   <div className="ui message success">
//                     Signed in successfully
//                   </div>
//                 ) : (
//                   <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//                 )} */}
//                 <form
//                 // onSubmit={(e) => handleSubmit(e)}
//                 >
//                   <Form
//                     name="basic"
//                     labelCol={{ span: 8 }}
//                     wrapperCol={{ span: 16 }}
//                     initialValues={{ remember: true }}
//                     onFinish={onFinish}
//                     onFinishFailed={onFinishFailed}
//                     autoComplete="off"
//                   >
//                     <Form.Item
//                       label="Full name"
//                       name="Full name"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please Enter your Full name",
//                         },
//                       ]}
//                     >
//                       <div class="input-group">
//                         <input
//                           type="text"
//                           placeholder="First name"
//                           aria-label="First name"
//                           className="form-control"
//                         />
//                         <input
//                           type="text"
//                           placeholder="Last name"
//                           aria-label="Last name"
//                           className="form-control"
//                         />
//                       </div>
//                     </Form.Item>
//                     <Form.Item
//                       label="E-mail"
//                       name="E-mail"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please Enter your E-mail!",
//                         },
//                       ]}
//                     >
//                       <Input
//                         placeholder="Enter your E-mail"
//                         // value={FormValues.email}
//                         // onChange={handleChange}
//                         prefix={
//                           <UserOutlined className="site-form-item-icon" />
//                         }
//                         suffix={
//                           <Tooltip title="Hint,please Enter a VALID E-mail, we want to reach you easily">
//                             <InfoCircleOutlined
//                               style={{ color: "rgba(0,0,0,.45)" }}
//                             />
//                           </Tooltip>
//                         }
//                       />
//                       {/* <p>{FormErrors.email}</p> */}
//                     </Form.Item>

//                     <Form.Item
//                       label="Password"
//                       name="password"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please Enter your password!",
//                         },
//                       ]}
//                     >
//                       <Input.Password
//                         placeholder="Enter your Password"
//                         // value={FormValues.password}
//                         // onChange={handleChange}
//                       />
//                       {/* <p>{FormErrors.password}</p> */}
//                     </Form.Item>
//                     <Form.Item
//                       label="Repeat Password"
//                       name="Repeat password"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please Enter your Repeat password!",
//                         },
//                       ]}
//                     >
//                       <Input.Password placeholder="Repeat Your Password" />
//                     </Form.Item>

//                     <Form.Item
//                       label="Address"
//                       name="Address"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please Enter your Address!",
//                         },
//                       ]}
//                     >
//                       <Input.Group compact>
//                         <Select style={{ width: "30%" }} defaultValue="Home">
//                           <Option value="Home">Home</Option>
//                           <Option value="Company">Company</Option>
//                         </Select>
//                         <Cascader
//                           style={{ width: "70%" }}
//                           options={options}
//                           placeholder="Select Address"
//                         />
//                       </Input.Group>
//                     </Form.Item>
//                     <Form.Item
//                       label="Phone-Number"
//                       name="Phone-Number"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please Enter your Phone-Number!",
//                         },
//                       ]}
//                     >
//                       <Input.Group compact>
//                         <Input style={{ width: "15%" }} defaultValue="+20" />
//                         <Input
//                           style={{ width: "30%" }}
//                           defaultValue="26888888"
//                         />
//                       </Input.Group>
//                     </Form.Item>
//                     <Form.Item
//                       label="Birth Date"
//                       name="Birth Date"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please Enter your Birth Date!",
//                         },
//                       ]}
//                     >
//                       <DatePicker />{" "}
//                     </Form.Item>
//                     <Form.Item
//                       name="remember"
//                       valuePropName="checked"
//                       wrapperCol={{ offset: 3, span: 16 }}
//                     >
//                       <Checkbox>Remember me</Checkbox>
//                     </Form.Item>

//                     <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
//                       <Button
//                         type="primary"
//                         htmlType="submit"
//                         className="btn btn-primary"
//                       >
//                         Register
//                       </Button>
//                     </Form.Item>
//                   </Form>
//                 </form>
//                 <div className="card-footer">
//                   <div className="d-flex justify-content-center links">
//                     Already have an account?<a href="/login">Login</a>
//                     {/* <Steps current={1}>
//                       <Step
//                         title="Finished"
//                         description="This is a description."
//                       />
//                       <Step
//                         title="In Progress"
//                         subTitle="Left 00:00:08"
//                         description="This is a description."
//                       />
//                       <Step
//                         title="Waiting"
//                         description="This is a description."
//                       />
//                     </Steps> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         ; );
//       </>
//     );
//   }
// }
// export default RegisterForm;
