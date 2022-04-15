import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";



export const AddToCart = () => {
    const { t } = useTranslation();
    return (
        <button href='./cart' className='button button-add-to-cart'>
            <i className="fas fa-shopping-cart me-2"></i>
            <span>{t("Add to cart")}</span>
        </button>
    );
};

export const Tag = (props) => {
    const { title, handleFilterTag } = props
    const {  selectTags  } = useSelector((state) => state.products);
    return (
        <button className={selectTags.includes(title) ? "button button-tag button-tag--active" : "button button-tag"} onClick={() => {
            if (handleFilterTag) {
                handleFilterTag(title)
            }
        }}>
            <span>{title}</span>
        </button>
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
