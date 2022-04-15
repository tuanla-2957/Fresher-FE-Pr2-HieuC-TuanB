import React, { useState } from 'react';
import './InputSearch.scss';
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { changeFilterProduct } from '../../../../actions/products.action';
import { useLocation, useNavigate } from 'react-router-dom';

const InputSearch = () => {
    const [ search, setSearch ] = useState("");
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const changeForm = (e) => {
        e.preventDefault();
        if (location.pathname !== '/product') {
            navigate('/product')
        }
        dispatch(changeFilterProduct({
            name: search
        }))
    }
    return (
        <form className='search input-group' onSubmit={changeForm}>
            <input 
                className='input input-outline' 
                type='search' 
                placeholder={t("search voucher...")} 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            <button type="submit" value="Submit" className='button-search'>
                <i className="fas fa-search"></i>
            </button>
        </form>
    );
};

export default InputSearch;
