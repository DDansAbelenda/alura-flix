/* Router */
import { Outlet } from "react-router-dom";
import { useContext } from "react";
/* Componentes */
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import EditDialog from "../../components/EditDialog";
/* Context */
import { GlobalContext } from "../../context/GlobalContext";
const Base = () => {
  const { state } = useContext(GlobalContext);
  const { videoSeleccionado } = state;
  return (
    <main>
      <Header />
      <Container>
        {/* Outlet es el marcador de posición para las rutas hijas */}
        <Outlet />
        {!!videoSeleccionado && <EditDialog />}
      </Container>
      <Footer />
    </main>
  );
};

export default Base;
