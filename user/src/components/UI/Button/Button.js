import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";



export const AddToCart = () => {
    const { t } = useTranslation();
    return (
        <button href='./cart' className='button button-add-to-cart'>
            <i className="fas fa-shopping-cart me-2"></i>
            <span>{t("Add to cart")}</span>
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
    const { t } = useTranslation();
    return (
        <Link to='./post' className='button button-base button-more'>
            <span>{t("READ MORE")}</span>
        </Link>
    );
};
