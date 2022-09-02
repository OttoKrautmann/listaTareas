import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Administrador from "./components/views/Administrador";
import CrearProducto from "./components/views/CrearProducto";
import EditarProductos from "./components/views/EditarProductos";
import Error404 from "./components/views/Error404";
import Navegador from "./components/common/Navegador";
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navegador></Navegador>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/administrador"
            element={<Administrador></Administrador>}
          ></Route>
          <Route
            exact
            path="/crearProducto"
            element={<CrearProducto></CrearProducto>}
          ></Route>
          <Route
            exact
            path="/editarProductos/:"
            element={<EditarProductos></EditarProductos>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
