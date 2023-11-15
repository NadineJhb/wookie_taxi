import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Filters({ people, setFilteredPeople }) {
  const [eye, setEye] = useState(false);
  const [big, setBig] = useState(false);
  const [tall, setTall] = useState(false);
  const [gender, setGender] = useState("all");

  useEffect(() => {
    const filtered = people.filter((person) =>
      !eye
        ? true
        : person.eye_color === "blue" || person.eye_color === "blue-gray"
    );
    const filtered2 = filtered.filter((person) =>
      !tall ? true : person.height >= 179
    );
    const filtered3 = filtered2.filter((person) =>
      !big ? true : person.mass >= 80
    );
    const filtered4 = filtered3.filter((person) =>
      gender === "all" ? true : person.gender === gender
    );
    setFilteredPeople(filtered4);
    console.warn(filtered4);
  }, [eye, big, tall, gender, people]);

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

          <h4>Gender preferences</h4>
          <div className="entry">
            <input
              type="radio"
              onInput={(e) => setGender(e.target.value)}
              id="11"
              name="gender"
              value="all"
              defaultChecked
            />
            <label htmlFor="11">All</label>
          </div>
          <div className="entry">
            <input
              type="radio"
              onInput={(e) => setGender(e.target.value)}
              id="9"
              name="gender"
              value="female"
              defaultChecked={false}
            />
            <label htmlFor="9">Women</label>
          </div>

          <div className="entry">
            <input
              type="radio"
              onInput={(e) => setGender(e.target.value)}
              id="10"
              name="gender"
              value="male"
              defaultChecked={false}
            />

            <label htmlFor="11">Men</label>
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
