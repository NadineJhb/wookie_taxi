import { useState } from "react";
import PropTypes from "prop-types";
import PlaneteCard from "./PlaneteCard";
import destroyerImg from "../public/images/starship/destroyer.png";

function Background({ planets, setInputDestination }) {
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
      {planets.map((planetItem) => {
        return (
          <div
            key={planetItem.name}
            className={`img-container background-${planetItem.name}`}
          >
            <img
              className="img-background-planet"
              src={`src/public/images/planets/${planetItem.name}.png`}
              onClick={() => handleClick(planetItem)}
              alt={planetItem.name}
              aria-hidden
            />
            {planet && planet.name === planetItem.name && (
              <PlaneteCard
                planet={planet}
                setInputDestination={setInputDestination}
                handleClick={(planetArg) => handleClick(planetArg)}
              />
            )}
          </div>
        );
      })}
      <div className="x">
        <img className="y" src={destroyerImg} alt="starship" />
      </div>
    </div>
  );
}

Background.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setInputDestination: PropTypes.func.isRequired,
};
export default Background;
