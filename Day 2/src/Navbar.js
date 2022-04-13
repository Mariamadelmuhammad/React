import React from "react";
import { Button } from 'react-bootstrap';

class Navbar extends React.Component {
  render() {
    return (
     <>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      {/* <button className="btn btn-primary">TEST BOOTSTRAP</button>

      <Button variant="secondary">Primary</Button> */}
     </>
    );
  }
}

export default Navbar;
