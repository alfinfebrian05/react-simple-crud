import React from "react";
import Form from "react-bootstrap/Form";

const InputComponent = ({
  labelName,
  inputName,
  inputType,
  inputPlaceholder,
  onInputChange,
  inputValue,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Label>{labelName}</Form.Label>
        <Form.Control
          type={inputType}
          name={inputName}
          value={inputValue}
          placeholder={inputPlaceholder}
          onChange={onInputChange}
        />
      </Form.Group>
    </>
  );
};

export default InputComponent;
