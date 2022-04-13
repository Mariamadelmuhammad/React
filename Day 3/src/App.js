import "./App.css";
import React from "react";
// import UserList from "./UserList";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import UserListFunctional from "./pages/UserListFunctional";
// import UserForm from "./pages/UserForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UserListAPI from "./pages/UserList";
// import UserDetails from "./pages/UserDetails";
import Api from "./Api";
import Nav from "./Nav";
import Details from "./Details";
import { connect } from "react-redux";
import { setFavourites } from "./Store/Action";

class App extends React.Component {
  render() {
    console.log(this.props.setFavourites);

    return (
      <div
        className="this.props"
        // className={this.props.fav === "ar" ? "text-right" : "text-left"}
        // dir={this.props.fav === "ar" ? "rtl" : "ltr"}
      >
        <Router>
          <Nav />
          <Switch>
            <Route path={"/"} exact component={Api} />
            <Route path={"/:id"} exact component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fav: state.Favourites,
  };
};

export default connect(mapStateToProps, { setFavourites })(App);
