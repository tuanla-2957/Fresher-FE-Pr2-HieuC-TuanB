import React, { useState, useEffect } from 'react';
import './Register.scss'
import { Modal, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import validate from '../../features/validate';
import { registerRequest } from '../../actions/auth.action';

const Register = (props) => {
    const { isOpen, handleCloseRegister } = props
    const handleClose = () => {
        handleCloseRegister()
    };
    const initialValues = { email: "", password : "", firstName: "" , lastName: ""};
    const [formValue, setFormValue] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit ] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name , value } = e.target;
        setFormValue({...formValue, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValue))
        setIsSubmit(true)
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            dispatch(registerRequest(formValue))
        }
    }, [formErrors])


    return (
        <Modal
            show={isOpen}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Enter First Name"
                            value={formValue.firstName}
                            onChange={handleChange}
                        />
                        {formErrors.firstName && <span className='text-form-danger'>{formErrors.firstName.toString()}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Enter Last Name"
                            value={formValue.lastName}
                            onChange={handleChange}
                        />
                        {formErrors.lastName && <span className='text-form-danger'>{formErrors.lastName.toString()}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <span className='text-form-danger'>{formErrors.email.toString()}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValue.password}
                            onChange={handleChange}
                        />
                        {formErrors.password && <span className='text-form-danger'>{formErrors.password.toString()}</span>}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">Đăng nhập</Button>
                </Modal.Footer>
            </Form>
        </Modal>

    );
};

export default Register;