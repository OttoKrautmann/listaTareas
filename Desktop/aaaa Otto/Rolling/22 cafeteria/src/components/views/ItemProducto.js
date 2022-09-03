import React from "react";
import Button from "react-bootstrap/Button";

const ItemProducto = (props) => {
  return (
    <tr>
      <td>{props.producto.id}</td>
      <td>{props.producto.nombreProducto}</td>
      <td>{props.producto.precio}</td>
      <td>{props.producto.imagen}</td>
      <td>{props.producto.categoria}</td>
      <td className="text-end">
        <Button variant="warning" type="submit" className="me-1" >
          Editar
        </Button>
        <Button variant="danger" type="submit">
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
