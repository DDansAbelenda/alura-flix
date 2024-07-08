
import "./card.css";
import CardButton from "./CardButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";
import { actionConst } from "../../../util/actionConstants";

import PropTypes from "prop-types";

const Card = ({ video }) => {

  //Contexto
  const { dispatch } = useContext(GlobalContext);

  // Iconos
  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />
  const editIcon = <FontAwesomeIcon icon={faPenToSquare} />

  // Funciones para eliminar y editar
  const deleteVideo = () => {
    dispatch({
      type: actionConst.DELETE_VIDEO,
      payload: video.id
    })
  }

  const editVideo = () => {
    dispatch({
      type: actionConst.OPEN_EDIT_POPUP,
      payload: video
    })
  }
  return (
    <div className="card-container">
      {/* Contenedor de la imagen */}
      <div className="image-container">
        <a href={video.url}>
          <img src={video.imagen} alt={video.titulo} />
        </a>
      </div>
      {/* Contenedor de los botones */}
      <div className="buttons-container">
        <CardButton onClick={deleteVideo} icon={deleteIcon}>BORRAR</CardButton>
        <CardButton onClick={editVideo} icon={editIcon}>EDITAR</CardButton>
      </div>
    </div>
  );
};

Card.propTypes = {
  video: PropTypes.object.isRequired
};

export default Card;
