/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

import Logo from "./Logo";
import Footer from "./Footer";

function Captcha() {
  const [personnage, setPersonnage] = useState("");

  const [alert, setAlert] = useState(false);

  const handleClick = (e) => {
    setPersonnage(e.target.alt);
  };

  const handleVerification = () => {
    if (personnage !== "chewbacca") {
      setAlert(!alert);
    } else {
      setAlert(alert);
    }
  };

  return (
    <>
      <Logo />
      <div className="title">
        <h1>Êtes-vous un vrai fan de Star Wars ?</h1>
      </div>

      <div className="container-global">
        <div className="container-captcha">
          <h2>
            Sélectionnez la/les cases contenant des WOOKIES afin de confirmer
            votre identité.
          </h2>
          <div className="container-img">
            <button
              className={
                personnage === "ewok"
                  ? "btn-capcha ewok color"
                  : "ewok btn-capcha"
              }
              type="button"
              onClick={handleClick}
            >
              <img src="src/public/images/captcha/Ewok.png" alt="ewok" />
            </button>
            <button
              className={
                personnage === "chewbacca"
                  ? "btn-capcha chewbacca color"
                  : "chewbacca btn-capcha"
              }
              type="button"
              onClick={handleClick}
            >
              <img
                src="src/public/images/captcha/chewbacca.png"
                alt="chewbacca"
              />
            </button>
            <button
              className={
                personnage === "darkvador"
                  ? "btn-capcha darkvador color"
                  : "darkvador btn-capcha"
              }
              type="button"
              onClick={handleClick}
            >
              <img
                src="src/public/images/captcha/darkvador.png"
                alt="darkvador"
              />
            </button>
            <button
              className={
                personnage === "grogu"
                  ? "btn-capcha grogu color"
                  : "grogu btn-capcha"
              }
              type="button"
              onClick={handleClick}
            >
              <img src="src/public/images/captcha/grogu.png" alt="grogu" />
            </button>
            <button
              className={
                personnage === "lego"
                  ? "btn-capcha lego color"
                  : "lego btn-capcha"
              }
              type="button"
              onClick={handleClick}
            >
              <img src="src/public/images/captcha/lego.png" alt="lego" />
            </button>
            <button
              className={
                personnage === "trooper"
                  ? "btn-capcha trooper color"
                  : "trooper btn-capcha "
              }
              type="button"
              onClick={handleClick}
            >
              <img src="src/public/images/captcha/trooper.png" alt="trooper" />
            </button>
            <button
              className={
                personnage === "yoda"
                  ? "btn-capcha yoda color"
                  : "yoda btn-capcha"
              }
              type="button"
              onClick={handleClick}
            >
              <img src="src/public/images/captcha/yoda.png" alt="yoda" />
            </button>
          </div>

          <div className="container-verification">
            <div className="button-container">
              <button
                type="submit"
                className="button-captcha"
                onClick={handleVerification}
              >
                Vérifier
              </button>
            </div>
            <div className={alert === true ? "text-alert" : "hidden"}>
              <p>❌ Erreur de validation. Veuillez réessayer.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Captcha;
