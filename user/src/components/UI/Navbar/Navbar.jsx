import React from 'react';
import './Navbar.scss'

const Navbar = ({ navList }) => {
    return (
        <nav className='d-none d-lg-block'>
            <ul>
                {navList.map((item) => {
                    return (
                        <a href={item.src} key={item.id}>
                            <li className='nav__item'>{item.name}</li>
                        </a>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
