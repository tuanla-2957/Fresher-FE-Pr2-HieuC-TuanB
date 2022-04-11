import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

export const AddToCart = () => {
    return (
        <button href='./cart' className='button button-add-to-cart'>
            <i className="fas fa-shopping-cart me-2"></i>
            <span>Add to cart</span>
        </button>
    );
};

export const Tag = ({title}) => {
    return (
        <Link to='./category' className='button button-tag'>
            <span>{title}</span>
        </Link>
    );
};

export const More = () => {
    return (
        <Link to='./post' className='button button-base button-more'>
            <span>READ MORE</span>
        </Link>
    );
};
