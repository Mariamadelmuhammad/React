// import React from "react";

// import FloatingWhatsApp from "react-floating-whatsapp";

// import "./Log.css";
// import "antd/dist/antd.css";

// import { Form, Input, Button, Checkbox, Tooltip } from "antd";

// import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(Form);
// };
// class LoginForm extends React.Component {
//   render() {
//     return (
//       <>
//         <div className="container">
//           <div className="d-flex justify-content-center h-100">
//             <div className="card">
//               <div className="card-header text-center">
//                 <h3>Log In</h3>
//                 <a>
//                   <FloatingWhatsApp
//                     phoneNumber="+20 1204822114"
//                     accountName="Mariam"
//                     allowClickAway
//                     notification
//                     notificationDelay={60000}
//                     notificationSound
//                   />
//                 </a>
//               </div>
//               <div className="card-body">
//                 <form onSubmit={(e) => handleSubmit(e)}>
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
//                       label="Username"
//                       name="username"
//                       rules={[
//                         {
//                           required: true,
//                           message: "Please input your username!",
//                         },
//                       ]}
//                     >
//                       <Input
//                         placeholder="Enter your E-mail"
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
//                       <Input.Password placeholder="Enter your Password" />
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
//                         Login
//                       </Button>
//                     </Form.Item>
//                   </Form>
//                 </form>
//                 <div className="card-footer">
//                   <div className="d-flex justify-content-center links">
//                     Already have an account?<a href="/Register">Register</a>
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
// export default LoginForm;
