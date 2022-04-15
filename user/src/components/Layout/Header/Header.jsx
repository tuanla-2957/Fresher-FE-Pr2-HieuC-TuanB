import React, { useEffect } from 'react';
import InputSearch from '../../UI/Input/Input-search/InputSearch';
import Navbar from '../../UI/Navbar/Navbar';
import { navLefts, navRights, infos } from './data.js'
import InfoBlock from '../../UI/Info-block/InfoBlock'
import Logo from '../../../assets/img/logo.png'
import './Header.scss'
import Login from '../../Login/Login';
import { useToggle } from '../../../features/customHook/useToggle';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../actions/auth.action';
import Register from '../../Register/Register';
import { getDataFromLocalStorage } from '../../../features/getDataFromLocalStorage';

const Header = () => {
    const { state: showLogin, set: setLogin } = useToggle()
    const { state: showRegister, set: setRegister } = useToggle()
    const { isAuthenticate } = useSelector((state) => state.auth);
    const user = getDataFromLocalStorage('user')
    const dispatch = useDispatch();

    console.log("user___________________-", user)

    const handleLoginClose = () => {
        setLogin(false)
    }

    const handleRegisterClose = () => {
        setRegister(false)
    }

    const logOutOnClick = () => {
        dispatch(logOut())
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload();
    }

    useEffect(() => {
        if (isAuthenticate) {
            setLogin(false)
            setRegister(false)
        }
    }, [isAuthenticate])


    return (
        <header className="header fixed-top shadow">
            <div className='header-wrapper'>
                <Login isOpen={showLogin} handleClose={handleLoginClose} />
                <Register isOpen={showRegister} handleClose={handleRegisterClose} />
                <div className='header-top'>
                    <div className='container'>
                        <div className='header-top-wrapper row'>
                            <div className='header__icon col-auto'>
                                <InfoBlock infos={infos} />
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
                                    {user._id ?
                                        <>
                                            <span className='text__login'>Hi {user.userName}</span>
                                            <ul className='account__option shadow'>
                                                <li className='account__item'>
                                                    Profile
                                                </li>
                                                <li className='account__item' onClick={logOutOnClick}>
                                                    Logout
                                                </li>
                                            </ul>
                                        </>
                                        :
                                        <>
                                            <i className="far fa-user"></i>
                                            <ul className='account__option shadow'>
                                                <li className='account__item' onClick={() => setLogin(true)}>
                                                    Login
                                                </li>
                                                <li className='account__item' onClick={() => setRegister(true)}>
                                                    Register
                                                </li>
                                            </ul>
                                        </>
                                    }
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
