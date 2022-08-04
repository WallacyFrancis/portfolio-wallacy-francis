import React from "react"
import { Nav, Container, Navbar, Offcanvas } from "react-bootstrap";
import { HeaderContent } from "./styles"

export default function Header() {
  return (
    <>
      <HeaderContent bg="light">
        <Navbar expand="md" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Wallacy Francis</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">Sobre mim</Nav.Link>
                  <Nav.Link href="#skills">Habilidades</Nav.Link>
                  <Nav.Link href="#projects">Projetos</Nav.Link>
                  <Nav.Link href="#contact">Contato</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </HeaderContent>
    </>
  );
}
