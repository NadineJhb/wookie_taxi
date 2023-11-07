import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import "../App.css";
import Footer from "../components/Footer";
import DriversCard from "../components/DriversCard";
import "../style/_DriversPage.scss";
import Logo from "../components/Logo";

function DriversPage() {
  return (
    <div className="DriversPage">
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div className="search">
        <SearchBar />
      </div>
      <div className="all">
        <DriversCard />
      </div>
      <Footer />
    </div>
  );
}
export default DriversPage;
