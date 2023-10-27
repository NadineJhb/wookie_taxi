import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/chauffeurs">Voir les chauffeurs</NavLink>
    </div>
  );
}

export default Header;
