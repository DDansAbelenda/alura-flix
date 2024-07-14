import CardButton from "./CardButton";
import ConfirmationDialog from "../../ConfirmationDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext, useState } from "react";
import { actionConst } from "../../../util/actionConstants";
import styled from "styled-components";
import PropTypes from "prop-types";
import useEditDialog from "../../../hooks/useEditDialog";
import { useApiVideos } from "../../../hooks/useApiVideos";
import useNotification from "../../../hooks/useNotification";

const CardContainer = styled.div`
  /*Style*/
  border: 5px solid ${props => props.color || 'rgba(0, 0, 0, 0.1)'};
  border-radius: 0.9375rem;
  /*Size*/
  width: 40%;
  min-width: 40%;
  /*Layout*/
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /*Tablet 900px a 800px*/
@media (max-width: 900px) {
    width: 47.5%;
    min-width: 47.5%;
 }
 /*Movil 799px a 0px*/
@media (max-width: 799px) {
  width: 70.5%;
  min-width: 96%;
}
`;

const ImageContainer = styled.div`
  width: 100%;
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
  padding: 0.8rem;
  box-sizing: border-box;
`;


const Card = ({ video, color }) => {

  //Contexto
  const { dispatch } = useContext(GlobalContext);
  const { deleteVideo } = useApiVideos();
  //Hook para manipular el modal del video
  const { openDialog } = useEditDialog();
  //Hook para manipular notificaciones
  const { addNotification } = useNotification()

  //Controlando el estado del dialog de confirmar eliminar
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Iconos
  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />
  const editIcon = <FontAwesomeIcon icon={faPenToSquare} />

  // Funciones para eliminar
  const handleConfirmDelete = () => {
    setShowConfirmDialog(false);

    //Eliminando de la api y luego de la vista
    deleteVideo(video.id).then(
      (data) => {
        dispatch({
          type: actionConst.DELETE_VIDEO,
          payload: data.id
        })
        addNotification(`El video "${data.titulo}" ha sido eliminado con éxito`, 'success');
      }
    ).catch((errors) => {
      //! Mala práctica, solo para usar con JSON Server
      console.log(errors)
      addNotification(`El video "${video.titulo}" ha sido eliminado con éxito`, 'success');
    });


  }

  const handleDelete = () => {
    setShowConfirmDialog(true);
  }

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  }

  //Función para abrir el dialog de editar
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
    <>
      <CardContainer color={color} className="card-container">
        {/* Contenedor de la imagen */}
        <ImageContainer color={color}>
          <a href={video.url}>
            <VideoImage src={video.imagen} alt={video.titulo} color={color} />
          </a>
        </ImageContainer>
        {/* Contenedor de los botones */}
        <ButtonsContainer color={color}>
          <CardButton onClick={handleDelete} icon={deleteIcon}>BORRAR</CardButton>
          <CardButton onClick={(e) => { editVideoShow(e) }} icon={editIcon}>EDITAR</CardButton>
        </ButtonsContainer>
      </CardContainer>
      {showConfirmDialog && (
        <ConfirmationDialog
          message={`¿Estás seguro de que quieres eliminar: "${video.titulo}"?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

Card.propTypes = {
  video: PropTypes.object.isRequired,
  color: PropTypes.string
};

export default Card;
