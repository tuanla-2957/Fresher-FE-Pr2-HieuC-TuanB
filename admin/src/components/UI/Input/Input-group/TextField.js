import React from "react";
import { Form } from "react-bootstrap";
import { ErrorMessage, useField } from "formik";
import "./TextField.scss";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Form.Group className='mb-3 form__group' controlId={`formBasic${label}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        className={`shadow-none ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component='div'
        name={field.name}
        className='error__message'
      />
    </Form.Group>
  );
};

export default TextField;
