import PropTypes from "prop-types";
import Tag from "../Tag";
import "./banner.css";
import styled from "styled-components";


const WrapperVideo = styled.a`
  display: block;
  /*Layout*/
  width: 52%;
  height: 21rem;
  flex-shrink: 0;
  
  /* Style */
  box-shadow: 0px 0px 17px 8px ${props => props.color} inset;
  border-radius: 0.9375rem;
  border: 5px solid ${props => props.color};
  background: url(${props => props.imagen}) lightgray 50% / cover no-repeat;
  background-size: 100% 100%; /* La imagen cubre completamente el contenedor */
  /*Tablet 900px a 800px*/
@media (max-width: 900px) {
    width: 50%;
    height: 18rem;
  }
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
          <h2 className="wrapper-text-title">{video.titulo}</h2>
          <p className="wrapper-text-paragraph">
            {video.descripcion}
          </p>
        </div>
        {/*Sección de video principal */}
        <WrapperVideo color={categoria.color} imagen={video.imagen} href={video.url} />
      </div>
    </section>
  );
};

Banner.propTypes = {
  video: PropTypes.shape({
    imagen: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired, // Add this line
    descripcion: PropTypes.string.isRequired
  }).isRequired,
  categoria: PropTypes.shape({
    color: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired
  }).isRequired,
  color: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired
};

export default Banner;
