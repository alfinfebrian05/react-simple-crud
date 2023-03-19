import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ButtonLinkComponent = ({ link_pathname, children }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleOnHover = () => setHovered(!hovered);
  const handleOnClick = () => setClicked(!clicked);

  return (
    <>
      <Button
        as="button"
        href={link_pathname}
        onMouseEnter={handleOnHover}
        onMouseLeave={handleOnHover}
        onClick={handleOnClick}
        variant={clicked || hovered ? "primary" : "link"}
        className={`text-decoration-none fw-${
          clicked || hovered ? "normal" : "semibold"
        }`}
      >
        {children}
      </Button>
    </>
  );
};

export default ButtonLinkComponent;
