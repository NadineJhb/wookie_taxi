import { useLocation } from "react-router-dom";

function Captcha() {
  const { state } = useLocation();
  return <div>{(state.destination, state.passenger)}</div>;
}
export default Captcha;
