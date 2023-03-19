import React from "react";
import Form from "react-bootstrap/Form";

const FormComponent = ({ onSubmitFormEvent, children }) => {
  return <Form onSubmit={onSubmitFormEvent}>{children}</Form>;
};

export default FormComponent;
