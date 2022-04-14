import React from 'react';
import './Register.scss'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { registerRequest } from '../../actions/auth.action';
import TextField from '../UI/Input/Input-group/TextField';
import * as Yup from 'yup';

const Register = (props) => {
    const { isOpen, handleClose } = props
    const initialValues = { email: "", password: "", firstName: "", lastName: "" };
    const dispatch = useDispatch();

    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email required'),
        password: Yup.string()
            .min(5, 'Must be 5 more characters')
            .required('Password required'),
        firstName: Yup.string()
            .required('Password required'),
        lastName: Yup.string()
            .required('Password required'),
    })

    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validate}
                onSubmit={(value) => {
                    dispatch(registerRequest(value))
                }}
            >
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TextField label="First Name" name="firstName" type="text"/>
                        <TextField label="Last Name" name="lastName" type="text"/>
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">Đăng kí</Button>
                    </Modal.Footer>
                </Form>
            </Formik>
        </Modal>

    );
};

export default Register;
