import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";
import './footer.css';
import logo from './logo.png';
import NavLink from '../NavLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  // Iconos
  const homeIcon = <FontAwesomeIcon icon={faHouse} />
  const addIcon = <FontAwesomeIcon icon={faPlus} />


  const location = useLocation(); // ruta en la que se encuentra
  const { state } = useContext(GlobalContext);
  const { serverNotification } = state;

  return (
    <footer>
      <img src={logo} alt="" />
      <p className="develop-by">Desarrollado por: Daniel Dans Abelenda</p>
      {/* NAVBAR */}
      <section className="buttons-container-footer">
        <NavLink
          buttonText={location.pathname === "/" ? "HOME" : ""}
          url={"/"}
          isActive={location.pathname === "/"}
          icon={homeIcon}
          isFooter={true}
        />
        <NavLink
          buttonText={location.pathname === "/new-video" ? "NUEVO VIDEO" : ""}
          url={"/new-video"}
          isActive={location.pathname === "/new-video"}
          disabled={serverNotification.error}
          icon={addIcon}
          isFooter={true}
        />
      </section>
    </footer>
  )
}

export default Footer