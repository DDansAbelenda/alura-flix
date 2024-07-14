import "./new.css";
import Field from '../../components/Field';
import Button from "../../components/Button";
import { useContext, useEffect } from "react";
import SelectField from "../../components/SelectField";
import Textarea from "../../components/Textarea";
import { GlobalContext } from "../../context/GlobalContext";
import { useApiVideos } from "../../hooks/useApiVideos";
import { v4 as uuidv4 } from 'uuid';
import { actionConst } from "../../util/actionConstants"; // Import the UPDATE_VIDEO constant
import useFormValidation from "../../hooks/useFormValidation";
import { validate } from "../../util/validateForm";
import { useNavigate } from 'react-router-dom';
import useNotification from "../../hooks/useNotification";

//Estado inicial del formulario
const formVideo = {
  titulo: "",
  imagen: "",
  categoria: "",
  url: "",
  descripcion: ""
}

const NewVideo = () => {
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

  // Importando elementos globales
  const { state, dispatch } = useContext(GlobalContext);
  const { postVideo } = useApiVideos();
  //Listado de categorías
  const { categorias } = state;

  //Navegación
  const navigate = useNavigate();

  //Notificaciones
  const { addNotification } = useNotification();
  /*Función para manejar el envío del formulario*/
  useEffect(() => {
    const submit = async () => {

      const newVideo = {
        id: uuidv4(), // Esto generará un ID único
        ...values
      }

      postVideo(newVideo).then(
        (video) => {
          dispatch({ type: actionConst.CREATE_VIDEO, payload: video }); // Use the imported UPDATE_VIDEO constant
          handleReset();
          addNotification(`El video "${video.titulo}" ha sido creado con éxito`, 'success');
        }
      ).catch((errors) => {
        console.log(errors)
        //! Mala práctica, solo para usar con JSON Server
        addNotification(`El video "${newVideo.titulo}" ha sido creado con éxito`, 'success');
      });
    }
    if (isSubmitting) {
      submit();
      navigate('/');
    }
  }, [dispatch, isSubmitting, handleReset, postVideo, values, navigate, addNotification]);


  return (
    <>
      <main className="main-section">
        <header className="main-title">
          <h1>Nuevo Video</h1>
          <h3>Complete el formulario para crear una nueva tarjeta de video</h3>
        </header>
        <section className="form-section">
          <h2>Crear Tarjeta</h2>
          <form className="save-form" onSubmit={handleSubmit}>
            <Field
              type={"text"}
              id={"titulo"}
              name={"titulo"}
              value={values.titulo}
              title={'Título'}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={errors.titulo && touched.titulo ? errors.titulo : "Introduce el título del video ..."}
              classNameInput={errors.titulo && touched.titulo ? 'invalid create-field' : 'create-field'}
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
              classNameInput={errors.categoria && touched.categoria ? 'invalid create-field' : 'create-field'}
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
              classNameInput={errors.imagen && touched.imagen ? 'invalid create-field' : 'create-field'}
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
              classNameInput={errors.url && touched.url ? 'invalid create-field' : 'create-field'}
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
              classNameInput={errors.descripcion && touched.descripcion ? 'invalid create-field' : 'create-field'}
              classNameLabel={errors.descripcion && touched.descripcion ? 'invalid' : ''}
              required={true}
            />
            <div className="button-container">
              <Button text={"Guardar"} type={"submit"} disabled={!isValid} />
              <Button text={"Limpiar"} type={"reset"} onClick={handleReset} />
            </div>
          </form>
        </section>
      </main>
    </>
  )
};

export default NewVideo;
