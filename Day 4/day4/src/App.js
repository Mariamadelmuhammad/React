import "./App.css";
import React from "react";
// import UserList from "./UserList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserListFunctional from "./pages/UserListFunctional";
import UserForm from "./pages/UserForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserListAPI from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import { connect } from "react-redux";
import { setLanguage } from './store/actions/language';

class App extends React.Component {
  render() {
    console.log(this.props);
    // TO SET LANGUAGE USING CLASS COMPONENT
    // this.props.setLanguage('ar')
    return (
      <div
        className={this.props.language === "ar" ? "text-right" : "text-left"}
        dir={this.props.language === "ar" ? "rtl" : "ltr"}
      >
        <Router>
          <Navbar />
          <Switch>
            <Route path={"/"} exact component={UserListFunctional} />
            <Route path={"/user"} exact component={UserListAPI} />
            <Route path={"/user/:id"} exact component={UserDetails} />
            <Route path={"/user/list"} exact component={UserForm} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.langugae.lang,
  };
};

export default connect(mapStateToProps , { setLanguage })(App);


// 1- import connect function form react redux
// 2- pass connect function to class component in export line
// 3- pass mapStateToProps function to connect to return store state
// 4- return form mapStateToProps the needed keys from state
// 5- Now you can read the state values from "this.props"
// 6- pass action fuction to connect method as second parameter 
// 7- Now you can dispatch action from "this.props.actionFunction()""