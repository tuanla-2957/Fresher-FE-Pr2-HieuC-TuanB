import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getOrdresRequest, setSelectedOrderRequest } from "../../actions";
import DataTable from "./components/DataTable";
import { Spinner } from "../../components/UI/Spinner";

export default function Order() {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrdresRequest());
  }, []);

  if (loading) {
    return (
      <Layout sidebar>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout sidebar>
      <DataTable data={orders} />
    </Layout>
  );
}
