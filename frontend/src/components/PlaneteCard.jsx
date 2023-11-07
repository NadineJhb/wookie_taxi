import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function PlaneteCard({ planet, setInputDestination }) {
  const handleClick = (event) => {
    setInputDestination(event.target.value);
  };

  return (
    <div className="planet-card">
      <div className="card">
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
            onClick={handleClick}
            type="submit"
            className="button-card"
            value={planet.name}
          >
            Y aller
          </button>
        </div>
      </div>
    </div>
  );
}

PlaneteCard.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  }).isRequired,
};
export default PlaneteCard;
