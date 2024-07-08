import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import GlobalContextProvider from "./context/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalContextProvider>
      <AppRoutes />
    </GlobalContextProvider>
  </>
);
