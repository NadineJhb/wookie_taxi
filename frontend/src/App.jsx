import Background from "./components/Background";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Filters from "./components/Filters";
import "./App.css";

/* import PlaneteCard from "./components/PlaneteCard"; */
/* import Driver from "./components/Driver"; */

function App() {
  return (
    <div className="globale">
      <Logo />
      <Background />
      {/* <Driver /> */}
      <Filters />
      <Footer />
      {/* <PlaneteCard /> */}
    </div>
  );
}

export default App;
