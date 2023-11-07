import Logo from "./Logo";
import Footer from "./Footer";

function Captcha() {
  return (
    <>
      <Logo />
      <div className="title">
        <h1>Êtes-vous un vrai fan de Star Wars ?</h1>
      </div>

      <div className="container-captcha">
        <h2>
          Sélectionnez la/les cases contenant des WOOKIES afin de confirmer
          votre identité.
        </h2>
        <div className="container-img">
          <img
            src="images/captcha/chewbacca.png"
            alt=""
            className="chewbacca"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Captcha;
