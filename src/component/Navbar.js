import React from "react";
import ReactDOM from "react-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <h3 className="navbar navbar-title">Marta Rail Station Arrival</h3>
        <span id="tick"></span>
      </nav>
    );
  }
}

function tick() {
  const elem = <div>{new Date().toLocaleTimeString()}</div>;
  ReactDOM.render(elem, document.getElementById("tick"));
}

setInterval(tick, 1000);

export default Navbar;
