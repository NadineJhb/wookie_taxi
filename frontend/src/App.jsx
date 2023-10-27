import Background from "./components/Background";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import PlaneteCard from "./components/PlaneteCard";
import "./App.css";
import Root from "./components/Root";
// import { useLoaderData } from "react-router-dom";

function App() {
  // const people = useLoaderData()

  return (
    <div className="globale">
      <Root />
      <Logo />
      <Background />
      <Footer />
      <PlaneteCard />
    </div>
  );
}

export default App;

// export async loaderPeople() {
//   axios.all ...=> data

//   return data
// }
