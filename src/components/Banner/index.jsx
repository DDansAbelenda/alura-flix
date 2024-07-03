import Tag from "../Tag";
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Contenido de la sección */}
      <div className="content">
        {/* Sección de texto*/}
        <div className="wrapper-text">
          <Tag
            color="var(--x-color-frontend)"
            text="FRONT END"
            classNameTag="principal-tag"
          />
          <h2 className="wrapper-text-title">Bienvenido</h2>
          <p className="wrapper-text-paragraph">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        {/*Sección de video principal */}
        <div className="wrapper-video"></div>
      </div>
    </section>
  );
};

export default Banner;
