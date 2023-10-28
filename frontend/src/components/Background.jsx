import { useState } from "react";
import PropTypes from "prop-types";
import PlaneteCard from "./PlaneteCard";

function Background({ planets }) {
  const [planet, setPlanet] = useState(null);
  const handleClick = (planetInfo) => {
    if (planet && planet.name === planetInfo.name) {
      setPlanet(null);
    } else {
      setPlanet(planetInfo);
    }
  };

  return (
    <div className="background">
      <h1>LE COVOIT' DE LA GALAXIE !</h1>
      {/* <div className="Alderaan"> */}

      {planets.map((planetItem) => {
        return (
          <div className={`img-container background-${planetItem.name}`}>
            <img
              className="img-background-planet"
              src={`src/public/images/planets/${planetItem.name}.png`}
              onClick={() => handleClick(planetItem)}
              alt={planetItem.name}
              aria-hidden
            />
            {planet && planet.name === planetItem.name && (
              <PlaneteCard planet={planet} />
            )}
          </div>
        );
      })}
    </div>
  );
}

Background.propTypes = {
  planets: PropTypes.shape({
    name: PropTypes.string.isRequired,
    map: PropTypes.string.isRequired,
  }).isRequired,
};
export default Background;
