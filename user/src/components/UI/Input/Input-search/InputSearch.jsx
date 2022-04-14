import React from 'react';
import './InputSearch.scss';
import { useTranslation } from "react-i18next";

const InputSearch = () => {
    const { t } = useTranslation();
    return (
        <form className='search input-group'>
            <input className='input input-outline' type='search' placeholder={t("search voucher...")}/>
            <button type="submit" value="Submit" className='button-search'>
                <i className="fas fa-search"></i>
            </button>
        </form>
    );
};

export default InputSearch;
