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
        <h1>Filter</h1>

        <fieldset className="container-passengers">
          <legend>Passengers</legend>

          <div className="entry">
            <input type="radio" id="0" name="passengers" value="0" checked />
            <label htmlFor="0">0</label>
          </div>

          <div className="entry">
            <input type="radio" id="1" name="passengers" value="1" />
            <label htmlFor="1">1</label>
          </div>

          <div className="entry">
            <input type="radio" id="2" name="passengers" value="2" />
            <label htmlFor="2">2</label>
          </div>
        </fieldset>

        <fieldset className="container-starship">
          <legend>Starship</legend>

          <div className="entry">
            <input
              type="radio"
              id="3"
              name="Starship"
              value="SnowSpeeder"
              checked
            />
            <label htmlFor="3">SnowSpeeder</label>
          </div>

          <div className="entry">
            <input
              type="radio"
              id="4"
              name="Starship"
              value="Imperial Speeder Bike"
            />
            <label htmlFor="4">Imperial Speeder Bike</label>
          </div>

          <div className="entry">
            <input type="radio" id="5" name="Starship" value="AT-ST" />
            <label htmlFor="5">AT-ST</label>
          </div>
        </fieldset>

        <fieldset className="container-looks">
          <legend>Options</legend>

          <div className="entry">
            <input
              type="checkbox"
              onInput={(e) => setEye(e.target.checked)}
              id="6"
              name="looks"
              value={eye}
              defaultChecked={false}
            />
            <label htmlFor="6">Blue eyes, please</label>
          </div>

          <div className="entry">
            <input
              type="checkbox"
              onInput={(e) => setTall(e.target.checked)}
              id="7"
              name="looks"
              value={tall}
              defaultChecked={false}
            />

            <label htmlFor="7">I like them tall</label>
          </div>

          <div className="entry">
            <input
              type="checkbox"
              onInput={(e) => setBig(e.target.checked)}
              id="8"
              name="looks"
              value={big}
              defaultChecked={false}
            />
            <label htmlFor="8">With an extra layer of muscles</label>
          </div>
        </fieldset>

        <fieldset className="favorite">
          <legend>Favorite</legend>
          <div className="entry">
            <input type="checkbox" id="9" name="favorite" value="favorite" />
            <label htmlFor="9">Favorite</label>
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
