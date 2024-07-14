import { useLocation } from "react-router-dom";
import NavLink from "../NavLink";
import "./header.css";
import logo from "./logo.png";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Header = () => {

  const location = useLocation(); // ruta en la que se encuentra

  const { state } = useContext(GlobalContext);
  const { serverNotification } = state;

  return (
    <header className="header-container">
      <img src={logo} alt="Logo de Alura" className="logo-img" />

      {/* NAVBAR */}
      <section className="buttons-container-nav">
        <NavLink
          buttonText={"HOME"}
          url={"/"}
          isActive={location.pathname === "/"}
        />
        <NavLink
          buttonText={"NUEVO VIDEO"}
          url={"/new-video"}
          isActive={location.pathname === "/new-video"}
          disabled={serverNotification.error}
        />
      </section>

    </header>
  );
};

export default Header;
