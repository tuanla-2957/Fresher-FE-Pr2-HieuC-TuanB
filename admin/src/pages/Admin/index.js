import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/Layout";
import './style.scss';
import Button from "../../components/UI/Button";
import DataTable from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getAdminRequest, deleteAdminRequest } from '../../actions/admin.action';

const AdminManager = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { accounts } = useSelector((state) => state.admin);

  const handleDeleteProduct = (accountId) => {
    dispatch(deleteAdminRequest({
      accountId: accountId
    }))
  };

  useEffect(() => {
    dispatch(getAdminRequest('admin'));
  }, []);

  return (
    <Layout sidebar>
      <section className='admin-container'>
        <div className='admin-container__table'>
          <div className="admin-container__add">
            <Button>Add new Account</Button>
          </div>
          <DataTable data={accounts} onDeleteAccount={handleDeleteProduct} />
        </div>
      </section>
    </Layout>
  );
};

export default AdminManager;
