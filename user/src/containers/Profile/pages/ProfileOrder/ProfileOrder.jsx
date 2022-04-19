import React, { useEffect } from "react";
import Profile from "../../Profile";
import { useSelector, useDispatch } from "react-redux";
import { getCustomerOrderRequest } from "../../../../actions";
import { useTranslation } from "react-i18next";

import "./ProfileOrder.scss";

export default function ProfileOrder() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getCustomerOrderRequest());
  }, []);

  const statusLabel = {
    ordered: "Ordered",
    in_progress: "In Progress",
    completed: "Completed",
  };

  return (
    <Profile>
      <div className='profile-order'>
        {orders &&
          orders.map((order) => (
            <div className='order-item'>
              <div className='order-item__header'>
                <p className='order-item__id'>{order._id}</p>
                <p className={`order-item__status--${order.status}`}>
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
                <p>
                  {t("Total")} :
                  <span className='order-item__total'>
                    {order.totalAmount}&#8363;
                  </span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </Profile>
  );
}
