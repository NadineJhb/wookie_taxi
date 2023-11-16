import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Filters({ people, setFilteredPeople, setCheckFavorite, float }) {
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
      <div
        className={`container-filters ${
          float ? "filtersVisible" : "filtersInvisible"
        }`}
      >
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
            <legend>Looks</legend>
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
              id="8"
              name="looks"
              value={big}
              defaultChecked={false}
            />
            <label htmlFor="8">Bring the muscles</label>
          </div>
        </fieldset>

        <fieldset className="container-gender">
          <div className="container-filter-category">
            <img
              src="src/public/images/icons/gender_yellow.png"
              alt="personage-icon"
            />
            <legend>Gender preference</legend>
          </div>
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
            <label htmlFor="10">Men</label>
          </div>
        </fieldset>

        <fieldset className="favorite">
          <div className="container-favorite">
            <img
              src="src/public/images/icons/yellow-heart.png"
              alt="yellow-heart"
            />
            <div className="text-favorite-checkbox">
              <input
                type="checkbox"
                onInput={(e) => setCheckFavorite(e.target.checked)}
                id="9"
                name="favorite"
                value="favorite"
                defaultChecked={false}
              />
              <label htmlFor="9">Favorite</label>
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
  setCheckFavorite: PropTypes.func.isRequired,
  float: PropTypes.func.isRequired,
};

export default Filters;
