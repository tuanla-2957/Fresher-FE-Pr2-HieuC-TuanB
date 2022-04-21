import React, { useEffect, useState, useRef } from "react";
import Layout from "../../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getAdminByIdRequest } from "../../../actions";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from "../../../components/UI/Input/Input-group/TextField";
import './style.scss'
import { Button } from "react-bootstrap";
import { updateAdminRequest } from '../../../actions/admin.action';
import { useParams } from "react-router-dom";

const EditAdmin = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { userId } = useParams();
  const { account } = useSelector((state) => state.admin);

  const validate = Yup.object({
    firstName: Yup.string()
      .required('First name required'),
    lastName: Yup.string()
      .required('Last name required'),
    phone: Yup.string()
      .min(9, 'Must be 9 more characters')
      .required('Password required')
  })



  useEffect(() => {
    dispatch(getAdminByIdRequest(userId));
  }, []);

  return (
    <Layout sidebar>
      <div className="edit-admin">
        <div className="edit-admin__form">
          {
            account &&
            (<Formik
              initialValues={account}
              validationSchema={validate}
              onSubmit={(value) => {
                const account = { ...value, userId: value._id}
                dispatch(updateAdminRequest(account))
              }}
            >
              <Form>
                <TextField label="First Name:" name="firstName" type="text" />
                <TextField label="Last Name:" name="lastName" type="text" />
                <TextField label="User Name:" name="userName" type="text" disabled/>
                <TextField label="Email:" name="email" type="email" disabled />
                <TextField label="Phone Number:" name="phone" type="number" />
                <Button variant="btn btn-outline-primary" type="submit">Chỉnh sửa</Button>
              </Form>
            </Formik>)
          }
        </div>
      </div>
    </Layout>
  );
};

export default EditAdmin;
