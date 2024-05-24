import { useState } from "react";
import MainApp from "./component/MainApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/selfinfo/Contact";
import AllWorks from "./pages/AllWorks";
import About from "./component/About";
import Navabout from "./component/Navabout";
import Navcontact from "./component/Navcontact";
import Navproject from "./component/Navproject";

function App() {
  return (
    <>
     <BrowserRouter>
  
  <Routes>
      
  <Route path="/" element={<MainApp />} />
  
  <Route path="/about" element={<Navabout/>} />
  <Route path="/contact" element={<Navcontact/>} />
  <Route path="/works" element={<Navproject/>} />
  </Routes>
   
  
  </BrowserRouter>

    </>
  );
}

export default App;
