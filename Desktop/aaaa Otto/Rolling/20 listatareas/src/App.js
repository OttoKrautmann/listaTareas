import React from "react";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div>
      <section className="container text-center my-3">
        <Titulo />
        <Subtitulo />
      </section>
      <section className="container">
        <Formulario />

      </section>
    </div>
  );
};

export default App;
