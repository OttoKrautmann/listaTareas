import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {NavLink, Link} from "react-router-dom"

const Navegador = () => {
  return (
    <div>
      <Navbar expand="lg" bg="danger" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/">Cafeteria</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink end to="/" className="nav-item nav-link">Inicio</NavLink>
              <NavLink end to="/administrador" className="nav-item nav-link">Administrar</NavLink>
              <NavLink end to="/crearProducto" className="nav-item nav-link">Crear producto</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navegador;
