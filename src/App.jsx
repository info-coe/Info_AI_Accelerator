// import "./App.css";
// import InfoAIAccelerator from "./InfoAIAccelerator";
// import Register from "./Register";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <BrowserRouter basename="Info_AI_Accelerator">
//         <Routes>
//           <Route path="/" element={<Register />}/>
//           <Route path="main" element={<InfoAIAccelerator/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React from "react";
import RegisterModal from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoAIAccelerator from "./InfoAIAccelerator";


const App = () => {
  return (
    <div className="App">
      {/* <h1>Welcome to Our Website</h1> */}
      <InfoAIAccelerator/>
      {/* <RegisterModal /> */}
      <RegisterModal/>
      {/* Rest of your website content */}
    </div>
  );
};

export default App;
