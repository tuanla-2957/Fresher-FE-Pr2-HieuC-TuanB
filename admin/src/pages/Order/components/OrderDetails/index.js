import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderDetailTable from "./orderDetailTable";
import { useDispatch, useSelector } from "react-redux";
import { Steps, Select } from "antd";
import "antd/dist/antd.css";
import { getOrderDetailRequest } from "../../../../actions";
import Layout from "../../../../components/Layout";
import FormatDate from "../../../../components/UI/FormatDate";

import "./style.scss";
import { Spinner } from "../../../../components/UI/Spinner";

const { Option } = Select;
const { Step } = Steps;

export default function OrderDetails() {
  const { orderId } = useParams();
  const { orderDetails, loading } = useSelector((state) => state.orders);
  const [currentStep, setCurrentStep] = useState(1);

  const dispatch = useDispatch();

  const step = {
    ordered: 0,
    in_progress: 1,
    completed: 2,
  };

  useEffect(() => {
    dispatch(getOrderDetailRequest(orderId));
  }, []);

  useEffect(() => {
    setCurrentStep(step[orderDetails.status]);
  }, [orderDetails.status]);

  const handleChange = (value) => {
    // dispatch(updateOrdresRequest({ orderId: selectedOrder._id, type: value }));
    console.log(value);
  };

  if (loading) {
    return (
      <Layout sidebar>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout sidebar>
      <div className='order-detail'>
        <h3 className='order-owner'>
          Order by :
          <span>
            <strong>{orderDetails.user.userName}</strong>
          </span>
        </h3>
        <OrderDetailTable data={orderDetails.items} />
        <h4>
          Total Price: <span>{orderDetails.totalAmount}</span>
        </h4>

        <Steps current={currentStep}>
          {orderDetails.orderStatus.map((status) => (
            <Step
              title={status.type}
              description={<FormatDate date={status.date} />}
            />
          ))}
        </Steps>

        <div className='order-updateStatus'>
          <Select
            defaultValue={
              orderDetails.status == "completed" ? "Finished" : "Update"
            }
            disabled={orderDetails.status == "completed" ? true : false}
            style={{ width: 120 }}
            onChange={handleChange}
          >
            {orderDetails.orderStatus.map((status) => {
              if (!status.isCompleted) {
                return <Option value={status.type}>{status.type}</Option>;
              }
            })}
          </Select>
        </div>
      </div>
    </Layout>
  );
}
