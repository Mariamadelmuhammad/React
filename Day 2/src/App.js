import "./App.css";
import React from "react";
// import UserList from "./UserList";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import UserListFunctional from "./UserListFunctional";
// import UserForm from "./UserForm";
// import Form from "./Form";
import SecondForm from "./SecondForm";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Api from "./Api";
// import Nav from "./Nav";
const App = () => {
  return (
    <div>
      <>
        <SecondForm />
        {/* <Router>
          <Nav />
          <Switch>
            <Route path={"/"} exact component={Api} />
            {/* <Route path={"/Favorite"} exact component={Favorite} /> */}
        {/* </Switch>
        </Router>  */}
      </>
      {/* <Navbar /> */}
      {/* <UserListFunctional /> */}
      {/* <UserForm /> */}
      {/* <Footer /> */}
      {/* <Form /> */}
    </div>
  );
};

export default App;
