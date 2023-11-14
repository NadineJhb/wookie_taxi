import "../style/_Intro.scss";
import { useNavigate } from "react-router-dom";

export default function Intro() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div>
      <title>Wookie Taxi</title>

      <body>
        <div className="star-wars-opening">
          <p className="opening-intro">
            A long time ago in a galaxy far, far away....
          </p>
          <div className="opening-stars">
            <img
              className="opening-logo"
              src="src/public/images/Star_Wars_Logo.svg"
              alt="Star Wars Logo"
            />
            <div className="wookie_taxi">
              <button className="wookie" type="button" onClick={handleClick}>
                <p> </p>
              </button>
            </div>
            <div className="skipIntro">
              <button className="skip" type="button" onClick={handleClick}>
                <p> Skip intro </p>
              </button>
            </div>
            <div className="crawl-text">
              <header className="crawl-header">
                <span className="crawl-episode">Episode 6.5</span>
                <h1 className="crawl-title">Wookie Taxi</h1>
              </header>
              <p>
                The Battle of Endor was a decisive battle of the Galactic Civil
                War in which the Rebel Alliance broke the domination of the
                Galactic Empire which oppressed the galaxy. The Death Star was
                destroyed during the clash.
              </p>
              <p>
                Celebrations spread throughout the galaxy as news of the
                Emperor's death spread. The one on Endor gave rise to three
                consecutive days of celebrations and the tired bodies of the
                members of the Alliance were in dire need of a pilot to return
                home.
              </p>
              <p>
                Our favorite wookie in search of career change seized the
                opportunity to found his first galactic carpooling company:
                Wookie Taxi....
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
