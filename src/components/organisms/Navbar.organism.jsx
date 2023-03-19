import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ButtonLinkComponent } from "../atoms";

import { NavLink } from "../molecules";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="fixed-top"
      >
        <Container>
          <Navbar.Brand href="/">Simple Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink linkHref="/">
                <ButtonLinkComponent>Home</ButtonLinkComponent>
              </NavLink>
              <NavLink linkHref="/create-product">
                <ButtonLinkComponent>Create Product</ButtonLinkComponent>
              </NavLink>
              <NavLink linkHref="/">
                <ButtonLinkComponent>Features</ButtonLinkComponent>
              </NavLink>
              <NavLink linkHref="/">
                <ButtonLinkComponent>Pricing</ButtonLinkComponent>
              </NavLink>
              <NavLink linkHref="/">
                <ButtonLinkComponent>FAQs</ButtonLinkComponent>
              </NavLink>
              <NavLink linkHref="/">
                <ButtonLinkComponent>About</ButtonLinkComponent>
              </NavLink>
            </Nav>
            <Nav>
              <NavDropdown
                title="What You Want Todo?"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/create-product">
                  Create Product
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
