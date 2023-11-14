import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Filters({ people, setFilteredPeople }) {
  const [eye, setEye] = useState(false);
  const [big, setBig] = useState(false);
  const [tall, setTall] = useState(false);

  useEffect(() => {
    const filtered = people.filter((person) =>
      !eye ? true : person.eye_color === "blue"
    );
    const filtered2 = filtered.filter((person) =>
      !tall ? true : person.height >= 165
    );
    const filtered3 = filtered2.filter((person) =>
      !big ? true : person.mass >= 80
    );
    // console.log(filtered3)
    setFilteredPeople(filtered3);
  }, [eye, big, tall, people]);

  return (
    <div>
      <div className="container-filters">
        <div className="container-filter-title">
          <img src="src/public/images/icons/filters.png" alt="filter-icon" />
          <h1>Filter by</h1>
        </div>
        <fieldset className="container-starship">
          <div className="container-filter-category">
            <img
              src="src/public/images/icons/vehicle_yellow.png"
              alt="vehicle-icon"
            />
            <legend>Starship</legend>
          </div>
          <div className="entry">
            <div className="container-text-checkbox">
              <label htmlFor="3">SnowSpeeder</label>
              <input
                type="checkbox"
                id="3"
                name="Starship"
                value="SnowSpeeder"
                checked
              />
            </div>
          </div>

          <div className="entry">
            <div className="container-text-checkbox">
              <label htmlFor="4">Imperial Speeder Bike</label>
              <input
                type="checkbox"
                id="4"
                name="Starship"
                value="Imperial Speeder Bike"
              />
            </div>
          </div>

          <div className="entry">
            <div className="container-text-checkbox">
              <label htmlFor="5">AT-ST</label>
              <input type="checkbox" id="5" name="Starship" value="AT-ST" />
            </div>
          </div>
        </fieldset>

        <fieldset className="container-looks">
          <div className="container-filter-category">
            <img
              src="src/public/images/icons/personage_yellow.png"
              alt="personage-icon"
            />
            <legend>Options</legend>
          </div>

          <div className="entry">
            <div className="container-text-checkbox">
              <label htmlFor="6">Blue eyes, please</label>
              <input
                type="checkbox"
                onInput={(e) => setEye(e.target.checked)}
                id="6"
                name="looks"
                value={eye}
                defaultChecked={false}
              />
            </div>
          </div>

          <div className="entry">
            <div className="container-text-checkbox">
              <label htmlFor="7">I like them tall</label>
              <input
                type="checkbox"
                onInput={(e) => setTall(e.target.checked)}
                id="7"
                name="looks"
                value={tall}
                defaultChecked={false}
              />
            </div>
          </div>

          <div className="entry">
            <div className="container-text-checkbox">
              <label htmlFor="8">Muscle</label>
              <input
                type="checkbox"
                onInput={(e) => setBig(e.target.checked)}
                id="8"
                name="looks"
                value={big}
                defaultChecked={false}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="favorite">
          <div className="entry">
            <div className="container-text-checkbox">
              <img
                src="src/public/images/icons/yellow-heart.256x205.png"
                alt="yellow-heart"
              />
              <label htmlFor="9">Favorite</label>
              <input type="checkbox" id="9" name="favorite" value="favorite" />
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

Filters.propTypes = {
  people: PropTypes.func.isRequired,
  setFilteredPeople: PropTypes.func.isRequired,
};

export default Filters;
