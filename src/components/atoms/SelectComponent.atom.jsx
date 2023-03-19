import React from "react";
import Form from "react-bootstrap/Form";

const SelectComponent = ({
  selectLabelName,
  selectName,
  options,
  selectedOption,
  selectValue,
  onSelectChange,
}) => {
  return (
    <Form.Group>
      <Form.Label>{selectLabelName}</Form.Label>
      <Form.Select
        value={selectValue}
        name={selectName}
        onChange={onSelectChange}
      >
        {options.map((option, idx) => {
          return (
            <option value={option} key={idx} className="text-capitalize">
              {option}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectComponent;
