import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import ItemProducto from "./ItemProducto";
import {Link} from "react-router-dom"

const Administrador = () => {
  const URL = process.env.REACT_APP_API_CAFETERIA
  const [productos, setProductos] = useState([])
  
  useEffect (()=>{
    consultarAPI()
  }, [])

  const consultarAPI = async () =>{
    // peticion get
    try{
      // codigo que quiero ejecutar
    const respuesta = await fetch(URL)
    const listaProductos = await respuesta.json()
    setProductos(listaProductos)
    }catch(error){
      console.log(error)
      // agregar un mensaje intuitivo al usuario
    }
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Tabla de productos</h1>
        <Link to="/crearProducto" className="btn btn-dark">Agregar producto</Link>
      </div>
      <hr />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL imagen</th>
            <th>Categoría</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {/* tengo que hacer un map */}
          {
            productos.map((producto)=> <ItemProducto key={producto.id} producto={producto}/>)
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Administrador;
