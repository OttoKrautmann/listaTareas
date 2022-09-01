import React, {useEffect, useState} from "react";
import logosimpsons from "../src/Components/img/logosimpsons.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./Components/Frase";
import "../src/Components/css/App.css";

const App = () => {
    const[personaje, setPersonaje] = useState({});
    
    useEffect(()=>{
        consultarAPI()
    }, [])

    const consultarAPI = async ()=>{
        const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
        const dato = await respuesta.json()
        setPersonaje(dato[0])
    }

  return (
    <div className="text-center fondoPrincipal d-flex">
      <div className="container text-center">
        <img src={logosimpsons} alt="logosimpsons" className="w-50 py-3" />
        <div className="py-3">
          <Button variant="primary" onClick={consultarAPI} >Dar frase</Button>
        </div>
        <div className="py-5 w-75 text-center">
            <Frase personaje={personaje} className="text-center"></Frase>
        </div>
      </div>
    </div>
  );
};

export default App;
