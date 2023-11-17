import PropTypes from "prop-types";

function PlaneteCard({ planet, setInputDestination, handleClick }) {
  const handleClickSelect = (event) => {
    setInputDestination(event.target.value);
  };

  return (
    <div className="planet-card">
      <div className={`${planet.name}-card`}>
        <button
          data-close-button
          className="close-button"
          onClick={() => handleClick(planet)}
          type="button"
        >
          &times;
        </button>
        <div className="planetImageDiv">
          <img
            src={`src/public/images/planets/${planet.name}.png`}
            alt={planet.name}
            className="img-planet"
          />
        </div>

        <div className={`${planet.name}-text`}>
          <h1>{planet.name}</h1>
          <p>Population : {planet.population} </p>
          <p>Terrain : {planet.terrain}</p>
          <p>Climate : {planet.climate} </p>
          <button
            onClick={handleClickSelect}
            type="submit"
            className="button-card"
            value={planet.name}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

PlaneteCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  setInputDestination: PropTypes.func.isRequired,
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  }).isRequired,
};
export default PlaneteCard;
