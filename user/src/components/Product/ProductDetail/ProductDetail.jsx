import React, { useEffect, useState } from 'react';
import './ProductDetail.scss';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getProductByIdRequest, getProductHotRequest } from '../../../actions/products.action';
import { AddToCart, Tag } from '../../UI/Button/Button';
import Quantity from '../../UI/Quantity/Quantity';
import { addCartRequest } from '../../../actions/cart.action';
import Product from '../Product';

const ProductDetail = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { productId } = useParams();
    const { product } = useSelector((state) => state.products);
    const { hotProducts } = useSelector((state) => state.products);
    const [tab, setTab] = useState(0);
    const [quantity, setQuantity] = useState(0)
    let productImage = []

    if (product) {
        productImage = [product.avatar, ...(product.photos)] || []
    }
    useEffect(() => {
        dispatch(getProductByIdRequest(productId))
        dispatch(getProductHotRequest({}))
    }, [])

    const handleQuantity = (quantity) => {
        setQuantity(quantity)
    }

    const handleAddToCart = (id) => {
        const cart = {
            productId: id,
            quantity: quantity
        }
        dispatch(addCartRequest(cart))
    }

    return (
        product && (<div className='product-detail'>
            <div className='container'>
                <div className='product-detail-wrapper row'>
                    <div className='col-12 col-lg-6'>
                        <div className='product-detail__images'>
                            <div className='select-img'>
                                <ul className='select-img__item'>
                                    {
                                        productImage.map((photo, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => setTab(index)}
                                                    className={index === tab ? 'tab-active' : ''}
                                                >
                                                    <div style={{ ['--aspect']: '1' }}>
                                                        <img src={photo} alt="" />
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="product-detail__image">
                                <div className="product-detail__img">
                                    <div className='thumb' style={{ ['--aspect']: '0.85' }}>
                                        <img src={productImage[tab]} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='product-detail__info'>
                            <div className='product-detail__title'>
                                {product.name}
                            </div>
                            <div className='product-detail__price'>
                                <span className='price__old'>
                                    ${product.listedPrice}
                                    <span className='price__new ms-2'>
                                        ${product.discountPrice}
                                    </span>
                                </span>
                            </div>
                            <div className='product-detail__text mb-3'>
                                {product.description}
                            </div>
                            <div className='product-detail__tag'>
                                <div className='product-detail__text'>
                                    Tags:
                                </div>
                                <div className='ms-2'>
                                    {
                                        product.tags.map((tag, index) => {
                                            return (
                                                <Tag title={tag} key={index} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='product-detail__action'>
                                <div className='addCart'>
                                    <Quantity quantity={quantity} onChangeQuantity={handleQuantity} />
                                    <div className='ms-3' onClick={() => handleAddToCart(product._id)}>
                                        <AddToCart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='related'>
                    <div className='product-detail__title'>
                        {t('RELATED PRODUCTS')}
                    </div>
                    <div className='product-list row'>
                        {
                            hotProducts?.map((product) => {
                                return (
                                    <div className='col-12 col-md-4' key={product._id}>
                                        <Product product={product} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>)
    );
};

export default ProductDetail;
