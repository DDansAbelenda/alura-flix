import "./home.css";
import Banner from "../../components/Banner";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import CardsSection from "../../components/CardsSection"; // Import CardsSection component
import Loading from "../../components/Loading";
import NoVideos from "../../components/NoVideos";

const Home = () => {
  const { state } = useContext(GlobalContext);
  const { videos, categorias, serverNotification } = state;
  const [video, setVideo] = useState(null);
  const [categoria, setCategoria] = useState(null);
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
      setVideo(primerVideo);
      setCategoria(categoriaDelVideo);
    }
  }, [videos, categorias]); // Dependencias del useEffect

  // Este useEffect se utiliza para controlar que componente mostrar inicialmente en dependencia
  // de si hay datos o no en la aplicación
  useEffect(() => {
    if (!serverNotification.isLoad) {
      setComponent(<Loading />);
    } else if (serverNotification.error) {
      setComponent(<NoVideos message={"Error de servidor, lo sentimos, inténtelo más tarde"} />);
    } else if (videos?.length === 0 || categorias?.length === 0) {
      setComponent(<NoVideos message={"Lo sentimos, no hay videos ni categorías disponibles"} />);
    } else {
      setComponent(
        <main className="main-section-card-container">
          <Banner video={video} categoria={categoria} />
          <div className="cards-section-container">
          {
            categorias.map((category) => {
              const categoryVideos = videos.filter((video) => video.categoria === category.id);
              if (categoryVideos.length === 0) return null; // Agregar esta condición para evitar que se muestre el componente
              return (
                <CardsSection
                  key={category.id}
                  category={category}
                  videos={videos.filter((video) => video.categoria === category.id)}
                />
              );
            })
          }
          </div>
        </main>
      );
    }
  }, [videos, categorias, video, categoria, serverNotification]); // Dependencias del useEffect


  return (
    <>{!serverNotification.isLoad && <div className="container-loader"></div>}
      {component}
    </>
  );
};

export default Home;
