import React from 'react';
import Process from '../../components/UI/Process/Process';
import './OrderResult.scss';
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';

const OrderResult = () => {
  const steps = ["SHOPPING CART", "ORDER COMPLETE"]
  const { t } = useTranslation();
  const { order, cartInfo } = useSelector((state) => state.carts);
  return (
    (cartInfo.length && order) ? (<div className='order-result'>
      <div className='order-result__process'>
        <Process currentStep={2} steps={steps}></Process>
      </div>
      <div className='order-result__content'>
        <div className='container'>
          <div className='order-result__thankyou'>
            <span>
              {t('Thank you. Your order has been received.')}
            </span>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-8'>
              <div className='order-result__table'>
                <table className="table table-card">
                  <thead>
                    <tr>
                      <th colSpan={2}>{t('PRODUCT')}</th>
                      <th>{t('QUANTITY')}</th>
                      <th>{t('TOTAL')}</th>
                    </tr>
                  </thead>
                  <tbody className="table-card__tbody">
                    {
                      cartInfo?.length
                        ?
                        cartInfo.map((cart) => {
                          return (
                            <tr key={cart.product._id}>
                              <td>
                                <div className='table__img' style={{ ['--aspect']: '1' }}>
                                  <img src={cart.product.avatar} alt={cart.product.name} />
                                </div>
                              </td>
                              <td>
                                <div className='table__info'>
                                  <span className='cart__name mb-2'>{cart.product.name}</span>
                                  <span className='cart__price mt-2'>${cart.product.discountPrice}</span>
                                </div>
                              </td>
                              <td>
                                <div className='table__quantity'>
                                  {cart.quantity}
                                </div>
                              </td>
                              <td className='order-result__price--large'>${cart.product.discountPrice * cart.quantity}</td>
                            </tr>
                          )
                        })
                        :
                        <tr>
                          <td colSpan={4}>{t('No result')}</td>
                        </tr>
                    }
                    <tr>
                      <td colSpan={5}>
                        <div className='order-result__more'>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-12 col-lg-4'>
              <div className='order-result__totals'>
                <div className='order-result__totals-wrapper'>
                  <div className='order-result__title'>
                    {t('ORDER INFORMATION')}
                  </div>
                  <div className='order-result__rows'>
                    <div className='order-result__text'>
                      {t('Shipping')}
                    </div>
                    <div className='order-result__text'>
                      {t('Free shipping')}
                    </div>
                  </div>
                  <div className='order-result__rows'>
                    <div className='order-result__text'>
                      {t('Payment Type')}
                    </div>
                    <div className='order-result__text'>
                      {t('card')}
                    </div>
                  </div>
                  <div className='order-result__rows'>
                    <div className='order-result__text'>
                      {t('Total')}
                    </div>
                    <div className='order-result__price--large'>
                      {order.totalAmount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
      : (
        <div className='order-result'></div>
      )
  );
};

export default OrderResult;
