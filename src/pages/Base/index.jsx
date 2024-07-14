/* Router */
import { Outlet } from "react-router-dom";
import { useContext } from "react";
/* Componentes */
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import EditDialog from "../../components/EditDialog";
import Notification from "../../components/Notification";
/* Context */
import { GlobalContext } from "../../context/GlobalContext";
import useNotification from "../../hooks/useNotification";
const Base = () => {
  const { state } = useContext(GlobalContext);
  const { videoSeleccionado, notifications } = state;
  const { removeNotification } = useNotification();
  return (
    <main>
      <Header />
      <Container>
        {/* Outlet es el marcador de posición para las rutas hijas */}
        <Outlet />
        {!!videoSeleccionado && <EditDialog />}
      </Container>
      {   // Trabajando con las notificaciones
        notifications.map((notification, index) => (
          <Notification
            key={index}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(index)}
          />
        ))
      }
      <Footer />
    </main>
  );
};

export default Base;
