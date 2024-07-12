import CardButton from "./CardButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";
import { actionConst } from "../../../util/actionConstants";
import styled from "styled-components";
import PropTypes from "prop-types";
import useEditDialog from "../../../hooks/useEditDialog";

const CardContainer = styled.div`
  /*Style*/
  border: 5px solid ${props => props.color || 'rgba(0, 0, 0, 0.1)'};
  border-radius: 0.9375rem;
  /*Size*/
  width: 25rem;
  height: 17rem;  
  min-width: 25rem;
  min-height: 17rem;
  /*Layout*/
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 14rem;
 `;

const VideoImage = styled.img`
  /* Size */
  width: 100%;
  height: 100%;
  /* Style */
  object-fit: cover; /* Para asegurarse de que la imagen cubra el área asignada */
`;

const ButtonsContainer = styled.div`
  /* Layout */
  display: flex;
  justify-content: space-evenly;
  flex: 1; /* Toma el espacio restante */
  /* Style */
  background-color: rgba(0, 0, 0, 0.90);
  border-top: 5px solid ${props => props.color || 'rgba(0, 0, 0, 0.1)'};
  box-shadow: 0px -3px 4px 0.5px ${props => props.color || 'rgba(0, 0, 0, 0.1)'} inset;
  /* Size */
  padding: 0.625rem;
  box-sizing: border-box;
`;


const Card = ({ video, color }) => {

  //Contexto
  const { dispatch } = useContext(GlobalContext);

  //Hook para manipular el modal del video
  const { openDialog } = useEditDialog();

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

  const editVideoShow = (event) => {
    /* Abre el dialog, le envía al estado el video seleccionado y para manipular la posición
    donde se muestra el dialog le envía un objeto DOMRect que proporciona información sobre
    las dimensiones y la posición de un elemento respecto a la ventana gráfica (viewport).
    En el caso actual el evento se genera en el botón de editar y luego se obtiene el padre más
    cercano de este botón que contenga la clase "card-container" 
    */
    const cardContainer = event.currentTarget.closest('.card-container');
    const rect = cardContainer.getBoundingClientRect()
    openDialog(video, rect);
  }
  return (
    <CardContainer color={color} className="card-container">
      {/* Contenedor de la imagen */}
      <ImageContainer color={color}>
        <a href={video.url}>
          <VideoImage src={video.imagen} alt={video.titulo} color={color} />
        </a>
      </ImageContainer>
      {/* Contenedor de los botones */}
      <ButtonsContainer color={color}>
        <CardButton onClick={deleteVideo} icon={deleteIcon}>BORRAR</CardButton>
        <CardButton onClick={(e) => { editVideoShow(e) }} icon={editIcon}>EDITAR</CardButton>
      </ButtonsContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  video: PropTypes.object.isRequired,
  color: PropTypes.string
};

export default Card;
