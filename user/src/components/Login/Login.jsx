import React from 'react';
import './Login.scss'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../actions/auth.action';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../UI/Input/Input-group/TextField';

const Login = (props) => {
    const { isOpen, handleClose } = props
    const initialValues = { email: "", password: "" };
    const dispatch = useDispatch();

    const validate = Yup.object({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email required'),
        password: Yup.string()
            .min(5, 'Must be 5 more characters')
            .required('Password required')
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
                    dispatch(loginRequest(value))
                }}
            >
                <Form>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">Đăng nhập</Button>
                    </Modal.Footer>
                </Form>
            </Formik>
        </Modal>
    );
};

export default Login;
