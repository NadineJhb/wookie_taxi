function PlaneteCard() {
  return (
    <>
      {/* YAVIN CARD */}
      <div className="container-cardYavin">
        <div className="card-Yavin">
          <div className="planetImageDiv">
            <img src="src/public/images/planets/Yavin IV.png" alt="Yavin" />
          </div>
          <div className="Yavin-text">
            <h1>GALAXY YAVIN IV </h1>
            <p>Population : 1000 </p>
            <p>Terrain : Jungle, forests </p>
            <p>Climate : Temperate, tropical </p>
            <button type="submit" className="button-Yavin">
              Y aller
            </button>
          </div>
        </div>
      </div>

      {/* TATOOIN CARD */}
      <div className="container-cardTatooine">
        <div className="card-Tatooine">
          <div className="planetImageDiv">
            <img src="src/public/images/planets/Tatooine.png" alt="Tatooine" />
          </div>
          <div className="Tatooine-text">
            <h1>GALAXY TATOOINE </h1>
            <p>Population : 200000</p>
            <p>Terrain : Desert </p>
            <p>Climate : Dry </p>
            <button type="submit" className="button-Tatooine">
              Y aller
            </button>
          </div>
        </div>
      </div>

      {/* MUSTAFAR CARD */}
      <div className="container-cardMustafar">
        <div className="card-Mustafar">
          <div className="planetImageDiv">
            <img src="src/public/images/planets/Mustafar.png" alt="Mustafar" />
          </div>
          <div className="Mustafar-text">
            <h1>GALAXY MUSTAFAR </h1>
            <p>Population : 20000</p>
            <p>Terrain : Volcanoes, lava river, mountains, cave </p>
            <p>Climate : Hot </p>

            <button type="submit" className="button-Mustafar">
              Y aller
            </button>
          </div>
        </div>
      </div>

      {/* DAGOBAH CARD */}
      <div className="container-cardDagobah">
        <div className="card-Dagobah">
          <div className="planetImageDiv">
            <img src="src/public/images/planets/Dagobah.png" alt="Dagobah" />
          </div>
          <div className="Dagobah-text">
            <h1>GALAXY DAGOBAH</h1>
            <p>Population : Unknowed </p>
            <p>Terrain : Swamp, jungle</p>
            <p>Climate : Murky </p>
            <button type="submit" className="button-Dagobah">
              Y aller
            </button>
          </div>
        </div>
      </div>

      {/* NABOO CARD */}
      <div className="container-cardNaboo">
        <div className="card-Naboo">
          <div className="planetImageDiv">
            <img src="src/public/images/planets/Naboo.png" alt="Naboo" />
          </div>
          <div className="Naboo-text">
            <h1>GALAXY NABOO</h1>
            <p>Population : 4500000000</p>
            <p>Terrain : Grassy hills, swamp, forests, mountains</p>
            <p>Climate : Temperate </p>
            <button type="submit" className="button-Naboo">
              Y aller
            </button>
          </div>
        </div>
      </div>

      {/* ALDERAAN CARD */}
      <div className="container-cardAlderaan">
        <div className="card-Alderaan">
          <div className="planetImageDiv">
            <img src="src/public/images/planets/Alderaan.png" alt="Alderaan" />
          </div>
          <div className="Alderaan-text">
            <h1>GALAXY ALDERAAN</h1>
            <p>Population : 2000000000</p>
            <p>Terrain : Grassland, mountains</p>
            <p>Climate : Temperate</p>
            <button type="submit" className="button-Alderaan">
              Y aller
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaneteCard;
