import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

const Formulario = () => {
  // Aqui va la logica
  let tareasLocalStorage = JSON.parse(localStorage.getItem("listaTareas")) || []

  // crear state
  const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);
  const [tarea, setTarea] = useState("");

  // aqui ciclo de vida
  useEffect(()=>{
    console.log("prueba de ciclo de vida")
    localStorage.setItem("listaTareas", JSON.stringify(arregloTareas))
  }, [arregloTareas])

  // aqui funciones

  const handleSubmit = (e) =>{
    e.preventDefault()
    // actualzar listaTareas
    setArregloTareas([...arregloTareas, tarea])
    setTarea("");

  }

  const borrarTarea = (nombreTarea)=>{
    let arregloModificado = arregloTareas.filter((valor)=>{return valor !== nombreTarea});
    // actualizar state
    setArregloTareas(arregloModificado)
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
      <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea} />
    </div>
  );
};

export default Formulario;
