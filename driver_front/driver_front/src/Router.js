import { PDFViewer } from "@react-pdf/renderer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./app/Menu";
import AppBarComponent from "./components/AppBar/appBar";
import DriverTable from "./components/Driver/driverTable";
import RegisterDriver from "./components/DriverTable/registerDriver";
import DriversReport from "./components/Reports/driversReport";

import LoaderReport from "./components/Reports/loaderReport";
import Teste from "./components/teste";

const Router = () => {
  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Menu />
        <AppBarComponent />

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/register_driver" element={<RegisterDriver />} />
          <Route path="/driver-table" element={<DriverTable />} />
          <Route path="/teste" element={<Teste />} />
          <Route
            path="/loader-report"
            element={
              <PDFViewer style={{ width: "100%", height: "90vh" }}>
                <LoaderReport />
              </PDFViewer>
            }
          />

          <Route
            path="/drivers-report"
            element={
              <PDFViewer style={{ width: "100%", height: "90vh" }}>
                <DriversReport />
              </PDFViewer>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
