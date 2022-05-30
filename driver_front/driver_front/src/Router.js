import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./components/Menu";
import Teste from "./components/teste";
import RegisterDriver from "./pages/registerDriver";

const Router = () => {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/register_driver" element={<RegisterDriver />} />
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
