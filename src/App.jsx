import React from "react";
import RegisterModal from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoAIAccelerator from "./InfoAIAccelerator";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <InfoAIAccelerator/>
      <Footer/>
      <RegisterModal/>
    </div>
  );
};

export default App;
