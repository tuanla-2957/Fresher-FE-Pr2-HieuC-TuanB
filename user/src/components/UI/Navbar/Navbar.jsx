import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { useTranslation } from "react-i18next";

const Navbar = ({ navList }) => {
    const { t } = useTranslation();
    return (
        <nav className='d-none d-lg-block'>
            <ul>
                {navList.map((item) => {
                    return (
                        <NavLink to={item.src} key={item.id} className="nav__item">
                            <li>{t(item.name)}</li>
                        </NavLink>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
