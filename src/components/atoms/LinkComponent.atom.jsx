import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ linkToPage, children, linkClassName }) => {
  return (
    <Link to={linkToPage} className={linkClassName}>
      {children}
    </Link>
  );
};

export default LinkComponent;
