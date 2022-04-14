import React from "react";
import { Form } from "react-bootstrap";

/**
 * @author
 * @function Input
 **/

export const Input = (props) => {
  return (
    <Form.Group>
      {props.label && <Form.Label>{props.label}</Form.Label>}

      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        {...props}
      />
    </Form.Group>
  );
};

export default Input;
