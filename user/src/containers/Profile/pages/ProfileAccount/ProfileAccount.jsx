import React, { useState, useRef } from "react";
import Profile from "../../Profile";
import TextField from "../../../../components/UI/Input/Input-group/TextField";
import { Button, Modal } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { formatDateYYYYMMDD } from "../../../../utils/helper/formatDate";
import axiosInstance from "../../../../helper/axios";
import { updateUserRequest } from "../../../../actions/auth.action";
import { useTranslation } from "react-i18next";
import "./ProfileAccount.scss";

import DefaultAvatar from "../../../../assets/img/default-avatar.jpg";

export default function ProfileAccount() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [imgUrl, setUrl] = useState(user.profilePicture);
  const imageInputRef = useRef();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialValues = {
    email: user.email,
    userName: user.userName,
    firstName: user.firstName,
    lastName: user.lastName,
    dob: formatDateYYYYMMDD(user.dob),
    phone: user.phone,
  };

  const validate = Yup.object({
    firstName: Yup.string().required("firstName is required"),
    lastName: Yup.string().required("lastName is required"),
  });

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file, file.name);

    try {
      const res = await axiosInstance.post("/image", formData);
      if (res.data.success) {
        setUrl(res.data.data);
      }
    } catch (err) {}
  };

  const handleUpdateUser = (value) => {
    const updateUser = {
      ...value,
      dob: new Date(value.dob).toISOString(),
      profilePicture: imgUrl,
      password: null,
    };
    dispatch(updateUserRequest(updateUser));
  };

  const renderImage = () => {
    if (imgUrl) {
      return <img className='avatar' alt='avatar' src={imgUrl} />;
    } else {
      return <img className='avatar' alt='avatar' src={DefaultAvatar} />;
    }
  };

  return (
    <Profile>
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={validate}
          onSubmit={handleUpdateUser}
        >
          <Form>
            <h3>{t("ACCOUNT DETAILS")}</h3>
            <div className='profile-avatar'>
              <label className='custom-file-upload'>
                <div>{renderImage()}</div>
                <input
                  type='file'
                  multiple
                  onChange={handleFileInput}
                  ref={imageInputRef}
                />
              </label>
            </div>
            <TextField
              label={`${t("Email")}`}
              name='email'
              type='email'
              disabled='true'
            />
            <TextField
              label={`${t("Username")}`}
              name='userName'
              type='text'
              disabled='true'
            />
            <TextField
              label={`${t("FirstName")}`}
              name='firstName'
              type='text'
            />
            <TextField label={`${t("LastName")}`} name='lastName' type='text' />
            <TextField label={`${t("Date Of Birth")}`} name='dob' type='date' />
            <TextField label={`${t("Phone")}`} name='phone' type='text' />
            <Button variant='primary' type='submit'>
              {t("Update")}
            </Button>
          </Form>
        </Formik>
      </>
    </Profile>
  );
}
