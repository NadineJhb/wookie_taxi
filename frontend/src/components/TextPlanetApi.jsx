import axios from "axios";
import React, { useState, useEffect } from "react";

function TextPlanetApi() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const fetchData = async (page = 1) => {
      try {
        const response = await axios.get(
          `https://swapi.dev/api/planets/?page=${page}`
        );
        const newPlanets = response.data.results;

        setPlanets((prevPlanets) => [...prevPlanets, ...newPlanets]);

        if (response.data.next) {
          // If there is a "next" page, fetch the next page of data
          const nextPage = page + 1;
          fetchData(nextPage);
        }
      } catch (err) {
        console.warn(err);
      }
    };

    fetchData(); // Start fetching data from page 1
  }, []);

  const fetchPlanetDetails = (planetUrl) => {
    axios
      .get(planetUrl)
      .then((response) => setSelectedPlanet(response.data))
      .catch((err) => console.warn(err));
  };

  return (
    <div>
      <button type="button">Next</button>
      {planets.length === 0 ? (
        <p>Tableau vide</p>
      ) : (
        planets.map((planet) => {
          return (
            <div key={planet.name}>
              <button
                type="button"
                onClick={() => fetchPlanetDetails(planet.url)}
              >
                Cliquez-moi
              </button>
              {planet.name}
            </div>
          );
        })
      )}

      {selectedPlanet && (
        <div className="card-Yavin IV">
          <img
            src={`frontend/src/public/images/planets${selectedPlanet.name}.png`}
            alt={selectedPlanet.name}
          />
          {/* Affichez les détails de la planète ici, par exemple : */}
          <p>Nom : {selectedPlanet.name}</p>
          <p>Climat : {selectedPlanet.climate}</p>
          {/* Parametre pour les données API a afficher */}
          <p>Terrain : {selectedPlanet.terrain} </p>
        </div>
      )}
    </div>
  );
}

export default TextPlanetApi;
