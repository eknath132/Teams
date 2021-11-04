import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Equipo from "../pages/Equipo";
import EquipoAgregar from "../pages/EquipoAgregar";



const ControllerRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="equipo" element={<Equipo />} />
        <Route path="agregarEquipo" element={<EquipoAgregar />} />
      </Routes>
  );
}

export default ControllerRoute;