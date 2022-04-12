import React from 'react';
import InputSearch from '../../UI/Input/InputSearch';
import Navbar from '../../UI/Navbar/Navbar';
import { navLefts, navRights, infos } from './data.js'
import InfoBlock from '../../UI/Info-block/InfoBlock'
import Logo from '../../../assets/img/logo.png'
import './Header.scss'

const Header = () => {
    return (
        <header className="header fixed-top shadow">
            <div className='header-wrapper'>
                <div className='header-top'>
                    <div className='container'>
                        <div className='header-top-wrapper row'>
                            <div className='header__icon col-auto'>
                                <InfoBlock  infos={infos}/>
                            </div>
                            <div className='header__search col-4 d-none d-md-block'>
                                <InputSearch />
                            </div>
                            <div className='header__right col-auto'>
                                <div className='language px-3'>
                                    <span>VI</span>
                                    <i className="fas fa-angle-down ms-1"></i>
                                    <ul className='language__option shadow'>
                                        <li className='language__item'>
                                            VI
                                        </li>
                                        <li className='language__item'>
                                            EN
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-mid'>
                    <div className='container'>
                        <div className='header-mid-wrapper row'>
                            <div className='header__info col-auto'>
                                <div className='header__contact'>
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className='header__favourite'>
                                    <i className="far fa-heart"></i>
                                </div>
                            </div>
                            <div className='header__nav col-auto'>
                                <Navbar navList={navLefts} />
                                <div className='header__logo'>
                                    <img src={Logo}
                                        alt='logo'
                                    />
                                </div>
                                <Navbar navList={navRights} />
                            </div>
                            <div className='header__info col-auto'>
                                <div className='account'>
                                    <i className="far fa-user"></i>
                                    <ul className='account__option shadow'>
                                        <li className='account__item'>
                                            Login
                                        </li>
                                        <li className='account__item'>
                                            Register
                                        </li>
                                    </ul>
                                </div>
                                <div className='header__cart'>
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className='header__menu d-lg-none'>
                                    <i className="fas fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
