import React, { useEffect, useState } from "react";
import Profile from "../../Profile";
import { useSelector, useDispatch } from "react-redux";
import {
  getCustomerOrderRequest,
  setOrderPageRequest,
  cancelOrderRequest,
} from "../../../../actions";
import { useTranslation } from "react-i18next";
import PaginationRounded from "../../../../components/PaginationRounded/Pagination";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "./ProfileOrder.scss";

export default function ProfileOrder() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [orderIdCancel, setOrderIdCancel] = useState("");
  const { orders, totalOrders, page, perPage } = useSelector(
    (state) => state.orders
  );

  useEffect(() => {
    dispatch(getCustomerOrderRequest());
  }, []);

  const totalPage = Math.ceil(totalOrders / perPage);

  const statusLabel = {
    ordered: "Ordered",
    in_progress: "In Progress",
    completed: "Completed",
    cancelled: "Cancelled",
  };

  const handleConfirmOrder = (value) => {
    setShowModal(true);
    setOrderIdCancel(value);
  };

  const confirmCancel = () => {
    dispatch(cancelOrderRequest({ orderId: orderIdCancel }));
    setShowModal(false);
  };

  const renderCancelOrderModal = (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title> {t("Cancel order")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t("Can you tell us why you drop this order :(")}</p>
      </Modal.Body>
      <Button onClick={confirmCancel}>{t("Confirm")}</Button>
    </Modal>
  );

  return (
    <Profile>
      <div className='profile-order'>
        {orders &&
          orders.map((order) => (
            <div className='order-item'>
              <div className='order-item__header'>
                <p className='order-item__id'>{order._id}</p>
                <p
                  className={`order-item__status order-item__status--${order.status}`}
                >
                  {statusLabel[order.status]}
                </p>
              </div>
              <div className='order-item__body'>
                {order.items.map((item) => (
                  <div className='order-subitem'>
                    <img
                      className='order-subitem__avatar'
                      src={item.productId.avatar}
                      alt=''
                    />
                    <div className='order-subitem__detail'>
                      <h4>{item.productId.name}</h4>
                      <p>x {item.purchaseQty}</p>
                    </div>
                    <div className='order-subitem__price'>
                      <p className='order-subitem__listed-price'>
                        {item.productId.listedPrice}&#8363;
                      </p>
                      <p className='order-subitem__discount-price'>
                        {item.productId.discountPrice}&#8363;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='order-item__footer'>
                {order.status == "ordered" && (
                  <Button onClick={() => handleConfirmOrder(order._id)}>
                    Cancel
                  </Button>
                )}
                <p className='order-item__total'>
                  {t("Total")} :<span>{order.totalAmount}&#8363;</span>
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className='order-pagination'>
        <PaginationRounded
          totalPage={totalPage}
          page={page}
          handleChange={(event, value) =>
            dispatch(setOrderPageRequest({ page: value }))
          }
        />
      </div>
      {renderCancelOrderModal}
    </Profile>
  );
}
