import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "../styles/index.css";
// import "animate.css";
import imagen from '../imagen1.jpg'

import ControllerRoute from "../controllers/Routes"


export const App = ()  => {
  return (
    <div className="App">
      <img id="imagen" src={imagen} alt="hola" width="100%" height="100%"/>
      <ControllerRoute/>
    </div>
  )
}

