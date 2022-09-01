import React from "react";
import logosimpsons from "../src/Components/img/logosimpsons.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Frase from "./Components/Frase";
import "../src/Components/css/App.css";

const App = () => {
  return (
    <div className="text-center fondoPrincipal">
      <div className="container">
        <img src={logosimpsons} alt="logosimpsons" className="w-50 py-3" />
        <div className="py-3">
          <Button variant="primary">Dar frase</Button>
        </div>
        <div className="py-5 w-50">
            <Frase></Frase>
        </div>
      </div>
    </div>
  );
};

export default App;
