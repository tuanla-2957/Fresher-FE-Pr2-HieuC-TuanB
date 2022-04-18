import React, { useState, useRef } from "react";
import Profile from "../../Profile";
import TextField from "../../../../components/UI/Input/Input-group/TextField";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { formatDateYYYYMMDD } from "../../../../utils/helper/formatDate";
import axiosInstance from "../../../../helper/axios";
import "./ProfileAccount.scss";

export default function ProfileAccount() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [imgUrl, setUrl] = useState(user.profilePicture);
  const imageInputRef = useRef();

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
      profilePicture: imgUrl,
    };
  };

  return (
    <Profile>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={handleUpdateUser}
      >
        <Form>
          <h3>ACCOUNT DETAILS</h3>
          <div className='profile-avatar'>
            <label className='custom-file-upload'>
              <div>
                {imgUrl && <img className='avatar' alt='avatar' src={imgUrl} />}
              </div>
              <input
                type='file'
                multiple
                onChange={handleFileInput}
                ref={imageInputRef}
              />
              <i className=' fa-solid fa-pen-to-square'></i>
            </label>
          </div>
          <TextField label='Email' name='email' type='email' disabled='true' />
          <TextField
            label='Username'
            name='userName'
            type='text'
            disabled='true'
          />
          <TextField label='FirstName' name='firstName' type='text' />
          <TextField label='LastName' name='lastName' type='text' />
          <TextField label='Date Of Birth' name='dob' type='date' />
          <TextField label='Phone' name='phone' type='text' />
          <Button variant='primary' type='submit'>
            Update
          </Button>
        </Form>
      </Formik>
    </Profile>
  );
}
