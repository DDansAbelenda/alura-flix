/*Importando componentes*/
import Button from "../Button"
import IconButton from "../IconButton"
import Field from "../Field"
import SelectField from "../SelectField"
import Textarea from "../Textarea"

/* Importando estado global */
import { GlobalContext } from "../../context/GlobalContext"
import { actionConst } from "../../util/actionConstants"
/* Estilos */
import './editDialog.css'

/* Hooks */
import useEditDialog from "../../hooks/useEditDialog"
import { useApiVideos } from "../../hooks/useApiVideos"
import { useContext, useState } from "react"
/* Styled */
import styled from "styled-components"

const Overlay = styled.div`
    background-color:rgba(8,20,42,.7);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogWrapper = styled.div`
    background-color:transparent;
    position:absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`


const EditDialog = () => {

    const { state, dispatch } = useContext(GlobalContext);
    const { isDialogOpen, closeDialog, videoSeleccionado, dialogPosition } = useEditDialog();
    const { putVideo } = useApiVideos();


    const [titulo, setTitulo] = useState(videoSeleccionado.titulo);
    const [categoria, setCategoria] = useState(videoSeleccionado.categoria);
    const [imagen, setImagen] = useState(videoSeleccionado.imagen);
    const [video, setVideo] = useState(videoSeleccionado.url);
    const [descripcion, setDescripcion] = useState(videoSeleccionado.descripcion);


    //Listado de categorías
    const categorias = state.categorias;

    const handleSubmit = async (e) => {

        e.preventDefault();

        const newVideo = {
            id: videoSeleccionado.id,
            titulo: titulo,
            categoria: categoria,
            imagen: imagen,
            url: video,
            descripcion: descripcion
        }

        //Cargar el listado de categorías
        putVideo(newVideo).then(
            (data) => {
                dispatch({ type: actionConst.UPDATE_VIDEO, payload: data });
            }
        );
        closeDialog();
    }
    return (<>{
        isDialogOpen && !!videoSeleccionado &&
        <>
            <Overlay />
            <DialogWrapper>
                <div className="dialog-container" style={{ top: dialogPosition.top + 'px' }}>
                    <div className="exit-button">
                        <IconButton onClick={closeDialog}><img src="/icons/cerrar.png" alt="" /></IconButton>
                    </div>
                    <div className="dialog-content">
                        <header className="title">EDITAR CARD:</header>
                        <form className="edit-form" onSubmit={handleSubmit}>
                            <Field
                                type={"text"}
                                value={titulo}
                                title={"Título"}
                                classNameType={"edit-field"}
                                required={true}
                                updateValueField={setTitulo}
                            />
                            <SelectField
                                value={categoria}
                                categorias={categorias}
                                title={"Categoría"}
                                classNameType={"edit-field"}
                                required={true}
                                updateValueField={setCategoria}
                            />
                            <Field
                                type={"text"}
                                value={imagen}
                                title={"Imagen"}
                                classNameType={"edit-field"}
                                required={true}
                                updateValueField={setImagen}
                            />
                            <Field
                                type={"text"}
                                value={video}
                                title={"Video"}
                                classNameType={"edit-field"}
                                required={true}
                                updateValueField={setVideo}
                            />
                            <Textarea
                                value={descripcion}
                                title={"Descripción"}
                                classNameType={"edit-field"}
                                rows={"8"}
                                required={true}
                                updateValueField={setDescripcion}
                            />
                            <div className="button-container">
                                <Button text={"Guardar"} type={"submit"} />
                                <Button text={"Limpiar"} type={"reset"} onClick={() => { alert("Se limpia") }} />
                            </div>
                        </form>
                    </div>
                </div>
            </DialogWrapper>
        </>
    }
    </>
    )
}

export default EditDialog

/**
 * const { estaAbiertoModal, fotoSeleccionada, cerrarModal } = useFotoModal();

    return <>
        {estaAbiertoModal && <>
            <Overlay />
            <DialogEstilizado open={!!fotoSeleccionada} onClose={() => cerrarModal()}>
                <Imagen foto={fotoSeleccionada} expandida={true} />
                <form method="dialog">
                    <BotonIcono formMethod="dialog">
                        <img src="/iconos/cerrar.png" alt="Icono de cerrar" />
                    </BotonIcono>
                </form>
            </DialogEstilizado>
        </>
        }

    </>
 * 
 */