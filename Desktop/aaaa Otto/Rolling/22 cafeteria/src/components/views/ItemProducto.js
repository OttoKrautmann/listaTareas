import React from "react";
import Button from "react-bootstrap/Button";

const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Café</td>
      <td>$250</td>
      <td>https://...</td>
      <td>Infusión</td>
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
