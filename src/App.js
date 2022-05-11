
import "./app.css";
import { BrowserRouter as BrowserRouter } from "react-router-dom";
import React from "react";
import NavBar from "./components/topbar/NavBar";
// import TickerProvider  from "./contexts/TickerContext";




function App() {
  return (
    <BrowserRouter>
    {/* <TickerProvider> */}
     <NavBar/>
     {/* </TickerProvider> */}
     </BrowserRouter>
 
  );
}

export default App;
