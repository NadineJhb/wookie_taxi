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
        {/* <h1>Filter</h1> */}

        {/* <fieldset className="container-starship">
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
        </fieldset> */}

        <fieldset className="container-looks">
          <legend>Options</legend>

          <h4>Physical attributes</h4>
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

        {/* <fieldset className="favorite">
          <legend>Favorite</legend>
          <div className="entry">
            <input type="checkbox" id="9" name="favorite" value="favorite" />
            <label htmlFor="9">Favorite</label>
          </div>
        </fieldset> */}
      </div>
    </div>
  );
}

Filters.propTypes = {
  people: PropTypes.func.isRequired,
  setFilteredPeople: PropTypes.func.isRequired,
};

export default Filters;
