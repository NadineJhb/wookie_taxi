import "../style/_Intro.scss";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";

export default function Intro() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setTimeout(() => {
        navigate("/home");
      }, 200000000);
    }
  };
  const handleClick = () => {
    if (!audioRef.current || audioRef.current.paused) {
      playAudio();
    } else {
      navigate("/home");
    }
  };
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <title>Wookie Taxi</title>

      <audio ref={audioRef} muted={isMuted}>
        <source src="/son/Introsw.mp4" type="audio/mp3" />
        <track kind="captions" />
      </audio>
      <div className="star-wars-opening">
        <p className="opening-intro" onClick={playAudio} aria-hidden>
          A long time ago in a galaxy far, far away....
        </p>
        <div className="opening-stars">
          <img
            className="opening-logo"
            src="/images/Star_Wars_Logo.svg"
            alt="Star Wars Logo"
          />
          <div className="wookie_taxi">
            <button className="wookie" type="button" onClick={handleClick}>
              <p> </p>
            </button>
          </div>
          <div className="switch_button">
            <button className="mute-button" type="button" onClick={toggleMute}>
              <GoMute className={isMuted ? "hideIcon" : "displayIcon"} />
              <GoUnmute className={isMuted ? "displayIcon" : "hideIcon"} />
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
              Celebrations spread throughout the galaxy as news of the Emperor's
              death spread. The one on Endor gave rise to three consecutive days
              of celebrations and the tired bodies of the members of the
              Alliance were in dire need of a pilot to return home.
            </p>
            <p>
              Our favorite wookie in search of career change seized the
              opportunity to found his first galactic carpooling company: Wookie
              Taxi....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
