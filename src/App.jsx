import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoAIAccelerator from "./InfoAIAccelerator";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <InfoAIAccelerator/>
      <Footer/>
    </div>
  );
};

export default App;
