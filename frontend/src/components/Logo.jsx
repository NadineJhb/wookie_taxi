import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src="src/public/images/logo_wookie.png" alt="logo_wookie" />
      </NavLink>
    </div>
  );
}

export default Logo;
