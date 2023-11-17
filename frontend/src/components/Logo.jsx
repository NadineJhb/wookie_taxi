import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/home">
        <img src="/images/logo_wookie.png" alt="logo_wookie" />
      </NavLink>
    </div>
  );
}

export default Logo;
