import React from "react";
import Nav from "react-bootstrap/Nav";
import { ButtonLinkComponent } from "../atoms";

const NavLink = ({ children, linkHref }) => {
  return <Nav.Link href={linkHref}>{children}</Nav.Link>;
};

export default NavLink;
