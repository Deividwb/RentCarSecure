import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./components/Menu";
import RegisterDriver from "./pages/registerDriver";

const Router = () => {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
      <Menu/>      
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/register_driver" element={<RegisterDriver />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
