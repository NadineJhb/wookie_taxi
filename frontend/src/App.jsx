import TextPlanetApi from "./components/TextPlanetApi";
import Background from "./components/Background";
import Logo from "./components/Logo";
import PlaneteCard from "./components/PlaneteCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TextPlanetApi />
      <Logo />
      <Background />
      <PlaneteCard />
    </div>
  );
}

export default App;
