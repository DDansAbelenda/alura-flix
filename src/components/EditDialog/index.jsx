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
import { validate } from "../../util/validateForm";
import useFormValidation from "../../hooks/useFormValidation";
import { useContext, useEffect } from "react"
import useNotification from "../../hooks/useNotification"
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
    // Estado global y hooks personales
    const { state, dispatch } = useContext(GlobalContext);
    const { isDialogOpen, closeDialog, videoSeleccionado, dialogPosition } = useEditDialog();
    const { putVideo } = useApiVideos();
    const { addNotification } = useNotification();

    //Estado inicial del formulario
    const formVideo = {
        titulo: videoSeleccionado.titulo,
        imagen: videoSeleccionado.imagen,
        categoria: videoSeleccionado.categoria,
        url: videoSeleccionado.url,
        descripcion: videoSeleccionado.descripcion
    }

    // Importando elementos para manipular el formulario
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        values,
        errors,
        isValid,
        isSubmitting,
        touched,
    } = useFormValidation(formVideo, validate);

    //Listado de categorías
    const categorias = state.categorias;

    useEffect(() => {
        const submit = async () => {
            const newVideo = {
                id: videoSeleccionado.id,
                ...values
            }

            putVideo(newVideo).then(
                (data) => {
                    dispatch({ type: actionConst.UPDATE_VIDEO, payload: data });
                    addNotification(`El video "${data.titulo}" ha sido actualizado con éxito`, 'success');
                }
            ).catch((errors) => {
                //! Mala práctica, solo para usar con JSON Server
                console.log(errors)
                addNotification(`El video "${newVideo.titulo}" ha sido actualizado con éxito`, 'success');
            });
            closeDialog();
        }

        if (isSubmitting) { submit(); }

    }, [videoSeleccionado, dispatch, isSubmitting, handleReset, putVideo, values, closeDialog, addNotification]);

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
                                id={"titulo"}
                                name={"titulo"}
                                value={values.titulo}
                                title={'Título'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={errors.titulo && touched.titulo ? errors.titulo : "Introduce el título del video ..."}
                                classNameInput={errors.titulo && touched.titulo ? 'invalid edit-field' : 'edit-field'}
                                classNameLabel={errors.titulo && touched.titulo ? 'invalid' : ''}
                                required={true}
                            />
                            <SelectField
                                id={"categoria"}
                                name={"categoria"}
                                value={values.categoria}
                                categorias={categorias}
                                title={"Categoría"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={errors.categoria && touched.categoria ? errors.categoria : "Introduce la categoria del video ..."}
                                classNameInput={errors.categoria && touched.categoria ? 'invalid edit-field' : 'edit-field'}
                                classNameLabel={errors.categoria && touched.categoria ? 'invalid' : ''}
                                required={true}
                            />
                            <Field
                                type={"text"}
                                id={"imagen"}
                                name={"imagen"}
                                value={values.imagen}
                                title={"URL de la imagen"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={errors.imagen && touched.imagen ? errors.imagen : "Introduce la ruta de la imagen ..."}
                                classNameInput={errors.imagen && touched.imagen ? 'invalid edit-field' : 'edit-field'}
                                classNameLabel={errors.imagen && touched.imagen ? 'invalid' : ''}
                                required={true}
                            />
                            <Field
                                type={"text"}
                                id={"url"}
                                name={"url"}
                                value={values.url}
                                title={"URL del video"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={errors.url && touched.url ? errors.url : "Introduce la url del video ..."}
                                classNameInput={errors.url && touched.url ? 'invalid edit-field' : 'edit-field'}
                                classNameLabel={errors.url && touched.url ? 'invalid' : ''}
                                required={true}
                            />
                            <Textarea
                                id={"descripcion"}
                                name={"descripcion"}
                                value={values.descripcion}
                                title={"Descripción"}
                                rows={"8"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder={errors.descripcion && touched.descripcion ? errors.descripcion : "Introduce la descripción del video ..."}
                                classNameInput={errors.descripcion && touched.descripcion ? 'invalid edit-field' : 'edit-field'}
                                classNameLabel={errors.descripcion && touched.descripcion ? 'invalid' : ''}
                                required={true}
                            />
                            <div className="button-container">
                                <Button text={"Guardar"} type={"submit"} disabled={!isValid} />
                                <Button text={"Limpiar"} type={"reset"} onClick={handleReset} />
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
