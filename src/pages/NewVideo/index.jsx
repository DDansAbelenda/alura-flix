import "./new.css";
import Field from '../../components/Field';
import SelectField from "../../components/SelectField";
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useApiVideos } from "../../hooks/useApiVideos";
import { v4 as uuidv4 } from 'uuid';
import { actionConst } from "../../util/actionConstants"; // Import the UPDATE_VIDEO constant

const NewVideo = () => {

  // Importando elementos globales
  const { state, dispatch } = useContext(GlobalContext);
  const { postVideo } = useApiVideos();
  //Listado de categorías
  const { categorias } = state;


  const [titulo, setTitulo] = useState();
  const [categoria, setCategoria] = useState();
  const [imagen, setImagen] = useState();
  const [video, setVideo] = useState();
  const [descripcion, setDescripcion] = useState();


  /* Funciones para manejar eventos de botones */
  const handleSubmit = async (e) => {

    e.preventDefault();

    const newVideo = {
      id: uuidv4(), // Esto generará un ID único
      titulo: titulo,
      categoria: categoria,
      imagen: imagen,
      url: video,
      descripcion: descripcion
    }

    postVideo(newVideo).then(
      (video) => {
        dispatch({ type: actionConst.CREATE_VIDEO, payload: video }); // Use the imported UPDATE_VIDEO constant
        handleReset();
      }

    );
  }

  const handleReset = (e) => {
    if (e != null) e.preventDefault();
    setTitulo("");
    setCategoria("");
    setImagen("");
    setVideo("");
    setDescripcion("");
  };


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
              value={titulo}
              title={"Título"}
              classNameType={"create-field"}
              required={true}
              updateValueField={setTitulo}
              placeholder="Introduce el título del video ..."
            />
            <SelectField
              value={categoria}
              categorias={categorias}
              title={"Categoría"}
              classNameType={"create-field"}
              required={true}
              updateValueField={setCategoria}
              placeholder="Introduce la categoría del video ..."
            />
            <Field
              type={"text"}
              value={imagen}
              title={"Imagen"}
              classNameType={"create-field"}
              required={true}
              updateValueField={setImagen}
              placeholder="Introduce la URL de la imagen ..."
            />
            <Field
              type={"text"}
              value={video}
              title={"Video"}
              classNameType={"create-field"}
              required={true}
              updateValueField={setVideo}
              placeholder="Introduce la URL del video ..."
            />
            <Textarea
              value={descripcion}
              title={"Descripción"}
              classNameType={"create-field"}
              rows={"8"}
              required={true}
              updateValueField={setDescripcion}
              placeholder="Introduce la descripción del video ..."
            />
            <div className="button-container">
              <Button text={"Guardar"} type={"submit"} />
              <Button text={"Limpiar"} type={"reset"} onClick={handleReset} />
            </div>
          </form>
        </section>
      </main>
    </>
  )
};

export default NewVideo;
