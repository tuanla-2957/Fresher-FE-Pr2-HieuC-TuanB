import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  getOrdresRequest,
  getSalesByDayRequest,
  getSalesByMonthRequest,
} from "../../actions";
import DataTable from "./components/DataTable";
import { Spinner } from "../../components/UI/Spinner";
import { THIS_MONTH, THIS_YEAR } from "../../constant";
import SalesByDayChart from "./components/Chart/SalesByDayChart";
import SalesByMonthChart from "./components/Chart/SalesByMonthChart";
import "./style.scss";
import "antd/dist/antd.css";
import { Select } from "antd";

import "./style.scss";

const { Option } = Select;

export default function Order() {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.orders);
  const [salesMonth, setSalesMonth] = useState(new Date().getMonth() + 1);

  const monthList = [
    { value: 1, title: "January" },
    { value: 2, title: "Febuary" },
    { value: 3, title: "March" },
    { value: 4, title: "April" },
    { value: 5, title: "May" },
    { value: 6, title: "Jun" },
    { value: 7, title: "July" },
    { value: 8, title: "August" },
    { value: 9, title: "September" },
    { value: 10, title: "October" },
    { value: 11, title: "November" },
    { value: 12, title: "December" },
  ];

  useEffect(() => {
    dispatch(getOrdresRequest());
    dispatch(getSalesByMonthRequest());
    dispatch(getSalesByDayRequest({ month: THIS_MONTH }));
  }, []);

  const daySaleSelectMonth = (value) => {
    if (value != salesMonth) {
      dispatch(getSalesByDayRequest({ month: Number(value) }));
      setSalesMonth(value);
    }
  };

  const renderSalesByDayChart = (
    <div className='chart'>
      <h4>{`Sales by day of month ${salesMonth}`}</h4>
      <div className='chart-header'>
        <div className='select'>
          <Select
            defaultValue='Month'
            style={{ width: 120 }}
            onChange={daySaleSelectMonth}
          >
            {monthList.map((mont) => (
              <Option value={mont.value}>{mont.title}</Option>
            ))}
          </Select>
        </div>
      </div>
      <SalesByDayChart month={salesMonth} />
    </div>
  );

  if (loading) {
    return (
      <Layout sidebar>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout sidebar>
      <div className='order-container'>
        <div className='chart'>
          <h4>Sales By Month of {THIS_YEAR}</h4>
          <SalesByMonthChart />
        </div>
        {renderSalesByDayChart}
        <div className='order-container__table'>
          <DataTable data={orders} />
        </div>
      </div>
    </Layout>
  );
}
