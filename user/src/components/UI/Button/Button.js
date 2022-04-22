import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { selectProductTag } from '../../../actions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



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
    const { title } = props
    const { selectTags } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleFilterTag = (tag) => {
        if (!window.location.href.includes('/product')) {
            navigate('/product')
        }
        const isChecked = selectTags.includes(tag)
        let tags;
        if (isChecked) {
            tags = selectTags.filter(item => item !== tag)
        } else {
            tags = [...selectTags, tag]
        }
        dispatch(selectProductTag(tags))
    }
    return (
        <button className={selectTags.includes(title) ? "button button-tag button-tag--active" : "button button-tag"} onClick={() => handleFilterTag(title)}>
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
