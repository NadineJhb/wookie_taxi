function Filters() {
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
              id="6"
              name="looks"
              value="Blue eyes"
              checked
            />
            <label htmlFor="6">Blue eyes, please</label>
          </div>

          <div className="entry">
            <input type="checkbox" id="7" name="looks" value="Tall guy" />
            <label htmlFor="7">I like them tall</label>
          </div>

          <div className="entry">
            <input type="checkbox" id="8" name="looks" value="Big guy" />
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

export default Filters;
