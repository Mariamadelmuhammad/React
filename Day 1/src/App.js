import "./App.css";
import React from "react";
import First from "./First";
import About from "./About";
import Skills from "./Skills";
import Card from "./Card";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="test">
          <First />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Skills />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
