import React from "react"
import { Col, Nav, Row, Container, Navbar } from "react-bootstrap";
import {Title, NavItem} from "./styles";

export default function Header() {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col lg="8" sm="8">
              <Title>Wallacy Francis</Title>
            </Col>
            <Col lg="4" sm="4">
              <Navbar expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                  <Nav>
                    <Nav.Link href="#home"><NavItem>Home</NavItem></Nav.Link>
                    <Nav.Link href="#about"><NavItem>Sobre</NavItem></Nav.Link>
                    <Nav.Link href="#skills"><NavItem>Habilidades</NavItem></Nav.Link>
                    <Nav.Link href="#projects"><NavItem>Projetos</NavItem></Nav.Link>
                    <Nav.Link href="#contact"><NavItem>Contato</NavItem></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  )
}
