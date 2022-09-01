import React, { useEffect, useState } from "react";
import logosimpsons from "../src/Components/img/logosimpsons.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./Components/Frase";
import "../src/Components/css/App.css";
import Spinner from "./Components/Spinner";

const App = () => {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setMostrarSpinner(true)
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const dato = await respuesta.json();
    setPersonaje(dato[0]);
    setMostrarSpinner(false);
  };
  // operador ternario
  const mostrarComponente =
    mostrarSpinner === true ? (
      <Spinner></Spinner>
    ) : (
      <Frase personaje={personaje} className="w-75"></Frase>
    );

  return (
    <div className="text-center fondoPrincipal d-flex">
      <div className="container text-center">
        <img src={logosimpsons} alt="logosimpsons" className="w-50 py-5" />
        <div className="py-3">
          <Button variant="primary" onClick={consultarAPI}>
            Dar frase
          </Button>
        </div>
        <div className="py-5">{mostrarComponente}</div>
      </div>
    </div>
  );
};

export default App;
