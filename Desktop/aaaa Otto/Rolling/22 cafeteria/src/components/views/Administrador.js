import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ItemProducto from "./ItemProducto";

const Administrador = () => {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between">
        <h1>Tabla de productos</h1>
        <Button variant="dark" type="submit">
          Agregar producto
        </Button>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>URL imagen</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </div>
  );
};

export default Administrador;
