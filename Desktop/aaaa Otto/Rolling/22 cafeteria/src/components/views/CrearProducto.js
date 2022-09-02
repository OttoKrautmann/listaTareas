import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CrearProducto = () => {
  return (
    <div className="container py-3">
      <h1>Crear Producto</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="Nombre">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el precio" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Imagen">
          <Form.Label>URL de la imagen</Form.Label>
          <Form.Control type="text" placeholder="Ingrese la URL de la imagen" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoría</Form.Label>
          <Form.Select id="Categoria">
            <option>Seleccione una categoría</option>
            <option>Dulce</option>
            <option>Salado</option>
            <option>Infusión</option>
            <option>Bebida</option>
            <option>Panadería</option>
          </Form.Select>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CrearProducto;
