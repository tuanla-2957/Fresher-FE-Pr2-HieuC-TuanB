import React from 'react';
import './Product.scss'
import { AddToCart, Tag } from '../UI/Button/Button.js'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className='product'>
            <div className="product-wrapper card">
                <div style={{ ['--aspect']: '2' }}>
                    <img className="card-img-top" src={product.avatar}
                        alt="product" />
                </div>
                <div className="card-body">
                    <div className='card__row'>
                        <div className='card__title'>{product.name}</div>
                        <div className='card__rate'></div>
                    </div>
                    <div className='card__tag mt-2'>
                        {product.tags.map((tag, index) => {
                            return (
                                <Tag title={tag} key={index}/>
                            )
                        })}
                    </div>
                    <div className='card__row my-2'>
                        <div className='card__price'>
                            <span className='price__old me-2'>${product.listedPrice}</span>
                            <span className='price__new'>${product.discountPrice}</span>
                        </div>
                        <div className='card__button'>
                            <AddToCart />
                        </div>
                    </div>
                </div>
            </div>
            <Link to='./product' className='card-wrapper'>

            </Link>
        </div>
    );
};

export default Product;
