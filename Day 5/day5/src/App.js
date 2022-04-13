// import "./App.css";
// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import UserListFunctional from "./pages/UserListFunctional";
// import UserForm from "./pages/UserForm";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import UserListAPI from "./pages/UserList";
// import UserDetails from "./pages/UserDetails";
// import { LanguageContext } from "./context/languageContext";

// const App = () => {
//   const [contextLang, setContextLang] = useState("en");
//   return (
//     <div
//       className={contextLang === "ar" ? "text-right" : "text-left"}
//       dir={contextLang === "ar" ? "rtl" : "ltr"}
//     >
//       <LanguageContext.Provider value={{ contextLang, setContextLang }}>
//         <Router>
//           <Navbar />
//           <Switch>
//             <Route path={"/"} exact component={UserListFunctional} />
//             <Route path={"/user"} exact component={UserListAPI} />
//             <Route path={"/user/:id"} exact component={UserDetails} />
//             <Route path={"/user/list"} exact component={UserForm} />
//           </Switch>
//           <Footer />
//         </Router>
//       </LanguageContext.Provider>
//     </div>
//   );
// };

// export default App;

// import UserList from "./UserList";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import UserListFunctional from "./pages/UserListFunctional";
// import UserForm from "./pages/UserForm";
// import UserListAPI from "./pages/UserList";
// import UserDetails from "./pages/UserDetails";
import "./App.css";
import React from "react";
import Api from "./Api";
import Nav from "./Nav";
import Details from "./Details";
import { connect } from "react-redux";
import { setFavourites } from "./store/Action";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LanguageContext } from "./context/languageContext";
import React, { useState } from "react";

const App = () => {
  const [contextLang, setContextLang] = useState("en");
  return (
    <div
      className={contextLang === "ar" ? "text-right" : "text-left"}
      dir={contextLang === "ar" ? "rtl" : "ltr"}
    >
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
        <Router>
          <Nav />
          <Switch>
            <Route path={"/"} exact component={Api} />
            <Route path={"/:id"} exact component={Details} />
          </Switch>
        </Router>
      </LanguageContext.Provider>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fav: state.Favourites,
  };
};

export default connect(mapStateToProps, { setFavourites })(App);
