import Header from "../../components/Header";
import Container from "../../components/Container";
import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <main>
      <Header />
      <Container>
        {/* Outlet es el marcador de posición para las rutas hijas */}
        <Outlet />
      </Container>
    </main>
  );
};

export default Base;
