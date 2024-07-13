import "./home.css";
import Banner from "../../components/Banner";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import CardsSection from "../../components/CardsSection"; // Import CardsSection component
import Loading from "../../components/Loading";
import NoVideos from "../../components/NoVideos";

const Home = () => {
  const { state } = useContext(GlobalContext);
  const { videos, categorias, serverError } = state;
  const [video, setVideo] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [cardsVideos, setCardsVideos] = useState([]);
  const [component, setComponent] = useState(null); // Se agrega el estado component con su respectivo setter [1

  // useEffect para actualizar el estado de video, categoria y cardsVideos
  useEffect(() => {
    /* 
     * Se utiliza la condición para evitar errores si no hay videos o categorias,
     * esto es útil al inicio cuando la petición a la API no ha terminado pero 
     * el componente ya se renderizó
     */
    if (videos?.length > 0 && categorias?.length > 0) {
      const primerVideo = videos[0]; // Asume que el primer video es el que quieres mostrar
      const categoriaDelVideo = categorias.find(categoria => categoria.id === primerVideo.categoria);
      const videosRestantes = videos.slice(1); // Elimina el primer video
      setVideo(primerVideo);
      setCategoria(categoriaDelVideo);
      setCardsVideos(videosRestantes);
    }
  }, [videos, categorias]); // Dependencias del useEffect
  console.log(serverError)
  // Este useEffect se utiliza para controlar que componente mostrar inicialmente en dependencia
  // de si hay datos o no en la aplicación
  useEffect(() => {
    // Se actualiza el estado de component con el JSX correspondiente
    if (serverError.error) {
      setComponent(<NoVideos message={"Error de servidor, lo sentimos, inténtelo más tarde"} />);
    } else if (!serverError.error && (!video || !categoria)) {
      setComponent(<Loading />);
    } else {
      setComponent(
        <main className="cards-section-container">
          <Banner video={video} categoria={categoria} />
          {
            categorias.map((category) => {
              return (
                <CardsSection
                  key={category.id}
                  category={category}
                  videos={cardsVideos.filter((video) => video.categoria === category.id)}
                />
              );
            })
          }
        </main>
      );
    }
  }, [videos, categorias, video, categoria, cardsVideos, serverError]); // Dependencias del useEffect


  return (
    <>
      {component}
    </>
  );
};

export default Home;
