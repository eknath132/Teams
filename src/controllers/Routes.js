import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Equipo from "../pages/Equipo";
import EquipoAgregar from "../pages/EquipoAgregar";
import EquipoEditar from "../pages/EquipoEditar";




const ControllerRoute = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="equipo" element={<Equipo />} />
        <Route path="nuevoEquipo" element={<EquipoAgregar />} />
        <Route path="Equipo/:id" element={<EquipoEditar />} />

      </Routes>
  );
}

export default ControllerRoute;