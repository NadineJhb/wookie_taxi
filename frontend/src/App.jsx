import SearchBar from "./components/SearchBar";
import Background from "./components/Background";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import PlaneteCard from "./components/PlaneteCard";
import "./App.css";

function App() {
  return (
    <div className="globale">
      <Logo />
      <Background />
      <SearchBar />
      <Footer />
      <PlaneteCard />
    </div>
  );
}

export default App;
