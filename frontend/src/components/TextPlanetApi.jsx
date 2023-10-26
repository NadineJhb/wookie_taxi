import axios from "axios";
import React, { useState, useEffect } from "react";

function TextPlanetApi() {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/?page=2")
      .then((response) => setPlanets(response.data.results))
      .catch((err) => console.warn(err));
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
            src={`/images/planets/${selectedPlanet.name}.png`}
            alt={selectedPlanet.name}
          />
          {/* Affichez les détails de la planète ici, par exemple : */}
          <p>Nom : {selectedPlanet.name}</p>
          <p>Climat : {selectedPlanet.climate}</p>
          {/* Ajoutez d'autres informations que vous souhaitez afficher */}
        </div>
      )}
    </div>
  );
}

export default TextPlanetApi;
