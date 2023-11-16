import "../style/_Intro.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ringer from "../public/son/son.mp4";

export default function Intro() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  const audio = new Audio(ringer);
  const [isPlay, setIsPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(isMuted);
  };
  const togglePlay = () => {
    audio.play();
    setIsPlay(!isPlay);
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
            <div>
              <figure>
                <audio
                  controls
                  autoPlay="false"
                  id="son"
                  src="/public/son/son.mp4"
                  muted={isMuted}
                >
                  <a href="son.mp4"> Download audio </a>
                  <track kind="captions" />
                </audio>
              </figure>
              {!isMuted && isPlay && (
                <button
                  className="mute-button"
                  type="button"
                  onClick={toggleMute}
                >
                  mute
                </button>
              )}
              {isPlay && (
                <button
                  className="play-button"
                  type="button"
                  onClick={toggleMute}
                >
                  mute
                </button>
              )}
              {!isPlay && (
                <button type="button" onClick={togglePlay}>
                  Play
                </button>
              )}
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
