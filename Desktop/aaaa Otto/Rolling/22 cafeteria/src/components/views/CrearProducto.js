import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { cantidadCaracteres, validarPrecio, hayCaracteres } from "./helpers";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState(0);
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [msjError, setMsjError] = useState(false);
  // variable de entorno con la direccion de mi api
  const URL = process.env.REACT_APP_API_CAFETERIA;
  // inicializar useNavigate
  const navegacion = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    // validar datos
    if (
      cantidadCaracteres(nombreProducto) &&
      validarPrecio(precio) &&
      hayCaracteres(imagen) &&
      hayCaracteres(categoria)
    ) {
      setMsjError(false)   

      // crear el objeto
      const nuevoProducto ={
        nombreProducto : nombreProducto,
        precio : precio,
        imagen : imagen,
        categoria : categoria
      }

      // enviar peticion a json-server (API) create
      try{
        const respuesta = await fetch(URL, {
          method:'POST' ,
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(nuevoProducto)
        })
        if(respuesta.status === 201){
          // mostrar que todo salio bien
          Swal.fire(
            'Bien hecho',
            'Agregaste un producto de forma exitosa',
            'success'   
          )
          // redirecciono a pagina de productos
          navegacion('/administrador');
        }
      }catch(error){
        // mostrar mensaje de error
        console.log(error)
      }

    } else {
      setMsjError(true)
    }
  };

  return (
    <div className="container py-3">
      <h1>Crear Producto</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Nombre">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre"
            onChange={(e) => setNombreProducto(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese el precio"
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Imagen">
          <Form.Label>URL de la imagen</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese la URL de la imagen"
            onChange={(e) => setImagen(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Select
            id="Categoria"
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Seleccione una categoría</option>
            <option value="Dulce">Dulce</option>
            <option value="Salado">Salado</option>
            <option value="Infusión">Infusión</option>
            <option value="Bebida">Bebida</option>
            <option value="Panadería">Panadería</option>
            <option value="Otros">Otros</option>
          </Form.Select>
        </Form.Group>
        <Button variant="dark" type="submit">
          Guardar
        </Button>
      </Form>
      {msjError ? (
        <Alert variant="danger mt-4">Debe corregir los datos</Alert>
      ) : null}
    </div>
  );
};

export default CrearProducto;
