import "./App.css";
import InfoAIAccelerator from "./InfoAIAccelerator";
import Register from "./Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="Info_AI_Accelerator">
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="main" element={<InfoAIAccelerator/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
