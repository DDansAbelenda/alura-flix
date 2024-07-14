import Base from "./pages/Base";
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";
import Page404 from "./pages/Page404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/normalize.css";
import "./css/global.css";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />}></Route>
          <Route path="new-video" element={<NewVideo />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
