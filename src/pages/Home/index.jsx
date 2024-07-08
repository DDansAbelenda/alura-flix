import "./home.css";
import Banner from "../../components/Banner";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useState } from "react";
import CardsSection from "../../components/CardsSection"; // Import CardsSection component
import Loading from "../../components/Loading";

const Home = () => {
  const { state } = useContext(GlobalContext);
  const { videos, categorias } = state;
  const [video, setVideo] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [cardsVideos, setCardsVideos] = useState([]);

  // useEffect para actualizar el estado de video, categoria y cardsVideos
  useEffect(() => {
    /* 
     * Se utiliza la condición para evitar errores si no hay videos o categorias,
     * esto es útil al inicio cuando la petición a la API no ha terminado pero 
     * el componente ya se renderizó
     */
    if (videos.length > 0 && categorias.length > 0) {
      const primerVideo = videos[0]; // Asume que el primer video es el que quieres mostrar
      const categoriaDelVideo = categorias.find(categoria => categoria.nombre === primerVideo.categoria);
      const videosRestantes = videos.slice(1); // Elimina el primer video
      setVideo(primerVideo);
      setCategoria(categoriaDelVideo);
      setCardsVideos(videosRestantes);
    }
  }, [videos, categorias]); // Dependencias del useEffect



  console.log("Estado desde componente Home: ", state);
  if (!video || !categoria) return <Loading />; // Muestra el componente Loading si video o categoria no están definidos
  return (
    <main className="cards-section-container">
      <Banner video={video} categoria={categoria} />
      {
        categorias.map((category) => {
          return (
            <CardsSection
              key={category.id}
              category={category}
              videos={cardsVideos.filter((video) => video.categoria === category.nombre)}
            />
          );
        })
      }
    </main>
  );
};

export default Home;
