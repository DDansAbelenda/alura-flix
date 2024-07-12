import PropTypes from "prop-types";
import Tag from "../Tag";
import "./banner.css";
import styled from "styled-components";


const WrapperVideo = styled.div`
  /*Layout*/
  width: 52%;
  height: 21rem;
  flex-shrink: 0;
  
  /* Style */
  box-shadow: 0px 0px 17px 8px ${props => props.color} inset;
  border-radius: 0.9375rem;
  border: 5px solid ${props => props.color};
  background: url(${props => props.imagen}) lightgray 50% / cover no-repeat;
  `

const Banner = ({ video, categoria }) => {
  if (!video || !categoria) return null; // Verifica que video y categoria estén definidos

  return (
    <section className="banner">
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Contenido de la sección */}
      <div className="content">
        {/* Sección de texto*/}
        <div className="wrapper-text">
          <Tag
            color={categoria.color}
            text={categoria.nombre}
            classNameTag="principal-tag"
          />
          <h2 className="wrapper-text-title">Challenge React</h2>
          <p className="wrapper-text-paragraph">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        {/*Sección de video principal */}
        <WrapperVideo color={categoria.color} imagen={video.imagen} />
      </div>
    </section>
  );
};

Banner.propTypes = {
  video: PropTypes.shape({
    imagen: PropTypes.string.isRequired
  }).isRequired,
  categoria: PropTypes.shape({
    color: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired // Add this line
  }).isRequired,
  color: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired
};

export default Banner;
