import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

const Navbar = ({ navList }) => {
    return (
        <nav className='d-none d-lg-block'>
            <ul>
                {navList.map((item) => {
                    return (
                        <NavLink to={item.src} key={item.id} className="nav__item">
                            <li>{item.name}</li>
                        </NavLink>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
