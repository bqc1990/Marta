import React from "react";
import Marta from "./component/Marta";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Marta />
      <Footer />
    </div>
  );
}

export default App;
