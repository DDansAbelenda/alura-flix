import { useLocation } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import "./header.css";
import logo from "./logo.png";

const Header = () => {

  const location = useLocation(); // ruta en la que se encuentra

  return (
    <header className="header-container">
      <img src={logo} alt="Logo de Alura" className="logo-img" />

      {/* NAVBAR */}
      <section className="buttons-container">
        <HeaderLink
          buttonText={"HOME"}
          url={"/"}
          isActive={location.pathname === "/"}
        />
        <HeaderLink
          buttonText={"NUEVO VIDEO"}
          url={"/new-video"}
          isActive={location.pathname === "/new-video"}
        />
      </section>

    </header>
  );
};

export default Header;
