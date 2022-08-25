import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
  // Aqui va la logica
  const [arregloTareas, setArregloTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    // actualzar listaTareas
    setArregloTareas([...arregloTareas, tarea])
    setTarea("");

  }

  const borrarTarea = (nombreTarea)=>{
    let arregloModificado = arregloTareas.filter((valor)=>{return valor != nombreTarea});
    
  }

  // aqui el maquetado
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control 
          type="text" 
          placeholder="Ingrese una tarea" 
          onChange={(e)=>setTarea(e.target.value.trimStart())}
          value={tarea}
           />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas arregloTareas={arregloTareas} />
    </div>
  );
};

export default Formulario;
