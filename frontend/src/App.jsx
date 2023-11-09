import { React, useState } from "react";
import SearchBar from "./components/SearchBar";
import Background from "./components/Background";
import Logo from "./components/Logo";
import "./App.css";

import Footer from "./components/Footer";

// import Filters from "./components/Filters";

function App() {
  const [inputDestination, setInputDestination] = useState("");
  const planets = [
    {
      name: "Yavin IV",
      rotation_period: "24",
      orbital_period: "4818",
      diameter: "10200",
      climate: "temperate, tropical",
      gravity: "1 standard",
      terrain: "jungle, rainforests",
      surface_water: "8",
      population: "1000",
      residents: [],
      films: ["https://swapi.dev/api/films/1/"],
      created: "2014-12-10T11:37:19.144000Z",
      edited: "2014-12-20T20:58:18.421000Z",
      url: "https://swapi.dev/api/planets/3/",
    },
    {
      name: "Dagobah",
      rotation_period: "23",
      orbital_period: "341",
      diameter: "8900",
      climate: "murky",
      gravity: "N/A",
      terrain: "swamp, jungles",
      surface_water: "8",
      population: "unknown",
      residents: [],
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-10T11:42:22.590000Z",
      edited: "2014-12-20T20:58:18.425000Z",
      url: "https://swapi.dev/api/planets/5/",
    },
    {
      name: "Naboo",
      rotation_period: "26",
      orbital_period: "312",
      diameter: "12120",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      surface_water: "12",
      population: "4500000000",
      residents: [
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/21/",
        "https://swapi.dev/api/people/35/",
        "https://swapi.dev/api/people/36/",
        "https://swapi.dev/api/people/37/",
        "https://swapi.dev/api/people/38/",
        "https://swapi.dev/api/people/39/",
        "https://swapi.dev/api/people/42/",
        "https://swapi.dev/api/people/60/",
        "https://swapi.dev/api/people/61/",
        "https://swapi.dev/api/people/66/",
      ],
      films: [
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-10T11:52:31.066000Z",
      edited: "2014-12-20T20:58:18.430000Z",
      url: "https://swapi.dev/api/planets/8/",
    },
    {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      surface_water: "1",
      population: "200000",
      residents: [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/6/",
        "https://swapi.dev/api/people/7/",
        "https://swapi.dev/api/people/8/",
        "https://swapi.dev/api/people/9/",
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/43/",
        "https://swapi.dev/api/people/62/",
      ],
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-09T13:50:49.641000Z",
      edited: "2014-12-20T20:58:18.411000Z",
      url: "https://swapi.dev/api/planets/1/",
    },
    {
      name: "Mustafar",
      rotation_period: "36",
      orbital_period: "412",
      diameter: "4200",
      climate: "hot",
      gravity: "1 standard",
      terrain: "volcanoes, lava rivers, mountains, caves",
      surface_water: "0",
      population: "20000",
      residents: [],
      films: ["https://swapi.dev/api/films/6/"],
      created: "2014-12-10T12:50:16.526000Z",
      edited: "2014-12-20T20:58:18.440000Z",
      url: "https://swapi.dev/api/planets/13/",
    },
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      surface_water: "40",
      population: "2000000000",
      residents: [
        "https://swapi.dev/api/people/5/",
        "https://swapi.dev/api/people/68/",
        "https://swapi.dev/api/people/81/",
      ],
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/6/",
      ],
      created: "2014-12-10T11:35:48.479000Z",
      edited: "2014-12-20T20:58:18.420000Z",
      url: "https://swapi.dev/api/planets/2/",
    },
  ];

  return (
    <div className="App">
      {/* <TextPlanetApi /> */}
      <Logo />
      <Background
        planets={planets}
        inputDestination={inputDestination}
        setInputDestination={setInputDestination}
      />
      <div className="title-searchbar-container">
        <h1>LE COVOIT' DE LA GALAXIE !</h1>
        <SearchBar
          inputDestination={inputDestination}
          setInputDestination={setInputDestination}
        />
      </div>
      <Footer />
      {/* <Filters />
 <Driver /> */}
    </div>
  );
}

export default App;
