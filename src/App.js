import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Materias from "./components/Materias";
import DetalhesMaterias from "./components/DetalhesMaterias";
import Home from "./components/Home";
import Loginp from "./components/Professor";
import PortalProfessor from "./components/PortalProfessor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/materias" element={<Materias />} />
         <Route path="/sala" element={<DetalhesMaterias />} />
         <Route path="/login" element={<Login />} />\
         <Route path="/loginp" element={<Loginp />} />
         <Route path="/portal" element={<PortalProfessor />} />
      </Routes>
    </Router>
  );
}

export default App;
