import React, { Fragment, useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../../../../components/UI/Input/Input-group/TextField";
import * as Yup from "yup";
import Profile from "../../Profile";
import { Button, Modal } from "react-bootstrap";
import { changePasswordRequest } from "../../../../actions/auth.action";
import { logOut } from "../../../../actions/auth.action";
import { useNavigate } from "react-router-dom";
import "./ProfilePassword.scss";
import { useTranslation } from "react-i18next";

export default function ProfilePassword() {
  const { error, isAuthenticate } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showconfirmModal, setShowConfirmModal] = useState(false);
  const [payloadPassword, setPayloadPassword] = useState({});
  const { t } = useTranslation();

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validate = Yup.object({
    currentPassword: Yup.string().required("current Password is required"),
    newPassword: Yup.string().required("new Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Passwords must match"
    ),
  });

  const handleChangePassword = (value) => {
    setShowConfirmModal(true);
    setPayloadPassword(value);
  };

  const confirmChangePassword = () => {
    dispatch(changePasswordRequest(payloadPassword));
  };

  const renderConfirmModal = (
    <Modal
      show={showconfirmModal}
      onHide={() => setShowConfirmModal(false)}
      backdrop='static'
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title> {t("Change Password")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t("You will be logout after success change password")}</p>
      </Modal.Body>
      <Button onClick={confirmChangePassword}>{t("Confirm")}</Button>
    </Modal>
  );

  return (
    <Profile>
      <div className='profile-password'>
        {error && <p className='error-message'>{error}</p>}
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={handleChangePassword}
        >
          <Form>
            <h3>{t("PASSWORD")}</h3>
            <TextField
              label={`${t("Current Password")}`}
              name='currentPassword'
              type='password'
            />

            <TextField
              label={`${t("New Password")}`}
              name='newPassword'
              type='password'
            />
            <TextField
              label={`${t("Confirm Password")}`}
              name='confirmPassword'
              type='password'
            />
            <Button variant='primary' type='submit'>
              {t("Change Password")}
            </Button>
          </Form>
        </Formik>
      </div>
      {renderConfirmModal}
    </Profile>
  );
}
