import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Process from '../../components/UI/Process/Process';
import './ShopCart.scss';
import { getCartRequest, updateCartRequest, deleteCartRequest, deleteAllCartRequest } from '../../actions/cart.action'
import Quantity from '../../components/UI/Quantity/Quantity';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { totalPrice } from '../../utils/helpers';

const ShopCart = () => {
    const dispatch = useDispatch();
    const { carts } = useSelector((state) => state.carts);
    const { t } = useTranslation();
    const steps= ["SHOPPING CART", "ORDER COMPLETE"]

    useEffect(() => {
        dispatch(getCartRequest())
    }, [])

    const handleQuantity = (quantity, productId) => {
        const data = {
            productId: productId,
            quantity: quantity
        }
        dispatch(updateCartRequest(data))
    }

    const handleDeleteAll = () => {
        dispatch(deleteAllCartRequest())
    }

    const handleDelete = (productId) => {
        dispatch(deleteCartRequest({
            productId: productId
        }))
    }

    return (
        <div className='cart'>
            <div className='cart__process'>
                <Process currentStep={1} steps={steps}></Process>
            </div>
            <div className='cart__content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-8'>
                            <div className='cart__table'>
                                <table className="table table-card">
                                    <thead>
                                        <tr>
                                            <th colSpan='3'>{t('PRODUCT')}</th>
                                            <th>{t('QUANTITY')}</th>
                                            <th>{t('SUBTOTAL')}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-card__tbody">
                                        {
                                            carts?.length
                                                ?
                                                carts.map((cart) => {
                                                    return (
                                                        <tr key={cart.product._id}>
                                                            <td><i className="fas fa-trash-alt" onClick={() => handleDelete(cart.product._id)}></i></td>
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
                                                                    <Quantity quantity={cart.quantity} productId={cart.product._id} onChangeQuantity={handleQuantity} />
                                                                </div>
                                                            </td>
                                                            <td className='cart__price--large'>${cart.product.discountPrice * cart.quantity}</td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                <tr>
                                                    <td colSpan={5}>{t('No result')}</td>
                                                </tr>
                                        }
                                        <tr>
                                            <td colSpan={5}>
                                                <div className='cart__more'>
                                                    <span className='cart__text'>{t('More product...')}<Link className='cart__link ms-1' to={'/product'}>{t('Click here')}</Link></span>
                                                    <button className='button button--danger' onClick={handleDeleteAll}>{t('DELETE ALL')}</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='cart__totals'>
                                <div className='cart__totals-wrapper'>
                                    <div className='cart__title'>
                                        {t('CART TOTALS')}
                                    </div>
                                    <div className='cart__rows'>
                                        <div className='cart__text'>
                                            {t('Subtotal')}
                                        </div>
                                        <div className='cart__price--large'>
                                            ${totalPrice(carts)}
                                        </div>
                                    </div>
                                    <div className='cart__rows'>
                                        <div className='cart__text'>
                                            {t('Shipping')}
                                        </div>
                                        <div className='cart__text'>
                                            {t('Free shipping')}
                                        </div>
                                    </div>
                                    <div className='cart__rows'>
                                        <div className='cart__text'>
                                            {t('Total')}
                                        </div>
                                        <div className='cart__price--large'>
                                            ${totalPrice(carts)}
                                        </div>
                                    </div>
                                    <button className='button button-other'>{t('PLACE ORDER')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;
