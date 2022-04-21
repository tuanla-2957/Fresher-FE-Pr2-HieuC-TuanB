import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";
import './style.scss';
import Button from "../../components/UI/Button";
import DataTable from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  getAdminRequest,
  deleteAdminRequest,
  addAdminRequest
} from '../../actions/admin.action';
import NewModal from "../../components/UI/Modal";
import Input from "../../components/UI/Input";

const AdminManager = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { accounts } = useSelector((state) => state.admin);

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleDeleteProduct = (accountId) => {
    dispatch(deleteAdminRequest({
      accountId: accountId
    }))
  };

  const submitModal = (e) => {
    const account = {
      userName,
      password
    };
    e.preventDefault();
    setShowAddModal(false);
    dispatch(addAdminRequest(account))
  };

  const closeModal = () => {
    setShowAddModal(false);
  };

  useEffect(() => {
    dispatch(getAdminRequest('admin'));
  }, []);

  const renderAddProductModal = (
    <NewModal
      title={"Add new Accout"}
      visible={showAddModal}
      onOk={submitModal}
      onCancel={closeModal}
    >
      <div className='group'>
        <label>
          User Name
          <Input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className='form-control-sm'
          />
        </label>
        <label>
          Password
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-control-sm'
          />
        </label>
      </div>
    </NewModal>
  );

  return (
    <Layout sidebar>
      <section className='admin-container'>
        <div className='admin-container__table'>
          <div className="admin-container__add">
            <Button onClick={() => setShowAddModal(true)}>Add new Account</Button>
          </div>
          <DataTable data={accounts} onDeleteAccount={handleDeleteProduct} />
        </div>
        {renderAddProductModal}
      </section>
    </Layout>
  );
};

export default AdminManager;
