import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Filters({ people, setFilteredPeople, setCheckFavorite }) {
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

        <fieldset className="container-looks">
          <div className="container-filter-category">
            <img
              src="src/public/images/icons/r2d2_yellow.png"
              alt="personage-icon"
            />
            <legend>Look for...</legend>
          </div>

          <div className="entry">
            <input
              type="checkbox"
              onInput={(e) => setEye(e.target.checked)}
              id="1"
              name="looks"
              value={eye}
              defaultChecked={false}
            />
            <label htmlFor="1">Blue eyes, please</label>
          </div>

          <div className="entry">
            <input
              type="checkbox"
              onInput={(e) => setTall(e.target.checked)}
              id="2"
              name="looks"
              value={tall}
              defaultChecked={false}
            />
            <label htmlFor="2">I like them tall</label>
          </div>

          <div className="entry">
            <input
              type="checkbox"
              onInput={(e) => setBig(e.target.checked)}
              id="3"
              name="looks"
              value={big}
              defaultChecked={false}
            />
            <label htmlFor="3">Bring the muscles</label>
          </div>
        </fieldset>

        <fieldset className="container-gender">
          <div className="container-filter-category">
            <img
              src="src/public/images/icons/gender_yellow.png"
              alt="personage-icon"
            />
            <legend>Gender</legend>
          </div>

          <div className="radiobutton-entry">
            <input
              type="radio"
              onInput={(e) => setGender(e.target.value)}
              id="4"
              name="gender"
              value="all"
              defaultChecked
            />
            <label htmlFor="4">All</label>
          </div>
          <div className="entry">
            <input
              type="radio"
              onInput={(e) => setGender(e.target.value)}
              id="5"
              name="gender"
              value="female"
              defaultChecked={false}
            />
            <label htmlFor="5">Women</label>
          </div>

          <div className="entry">
            <input
              type="radio"
              onInput={(e) => setGender(e.target.value)}
              id="6"
              name="gender"
              value="male"
              defaultChecked={false}
            />

            <label htmlFor="6">Men</label>
          </div>
        </fieldset>

        <fieldset className="favorite">
          <img
            src="src/public/images/icons/yellow-heart.256x205.png"
            alt="yellow-heart"
          />
          <div className="entry">
            <input
              type="checkbox"
              onInput={(e) => setCheckFavorite(e.target.checked)}
              id="7"
              name="favorite"
              value="favorite"
              defaultChecked={false}
            />
            <label htmlFor="7">Favorite</label>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

Filters.propTypes = {
  people: PropTypes.func.isRequired,
  setFilteredPeople: PropTypes.func.isRequired,
  setCheckFavorite: PropTypes.func.isRequired,
};

export default Filters;
