import React, { useEffect, useState } from "react";
import InputSearch from "../../UI/Input/Input-search/InputSearch";
import Navbar from "../../UI/Navbar/Navbar";
import { navLefts, navRights, infos } from "./data.js";
import InfoBlock from "../../UI/Info-block/InfoBlock";
import Logo from "../../../assets/img/logo.png";
import "./Header.scss";
import Login from "../../Login/Login";
import { useToggle } from "../../../features/customHook/useToggle";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../actions/auth.action";
import Register from "../../Register/Register";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { totalItemsInCart } from "../../../utils/helpers";

const Header = () => {
  const { state: showLogin, set: setLogin } = useToggle();
  const { state: showRegister, set: setRegister } = useToggle();
  const { isAuthenticate, user } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.carts);

  const dispatch = useDispatch();

  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  const logOutOnClick = () => {
    dispatch(logOut());
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleLanguage = (value) => {
    setLanguage(value);
  };

  useEffect(() => {
    if (isAuthenticate) {
      setLogin(false);
      setRegister(false);
    }
  }, [isAuthenticate]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <header className='header fixed-top shadow'>
      <div className='header-wrapper'>
        <Login isOpen={showLogin} handleClose={() => setLogin(false)} />
        <Register
          isOpen={showRegister}
          handleClose={() => setRegister(false)}
        />
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
                  {language === "en" ? "EN" : "VI"}
                  <i className='fas fa-angle-down ms-1'></i>
                  <ul className='language__option shadow'>
                    <li
                      className='language__item'
                      onClick={() => handleLanguage("vi")}
                    >
                      VI
                    </li>
                    <li
                      className='language__item'
                      onClick={() => handleLanguage("en")}
                    >
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
              <div className='header__info col-auto d-none d-md-flex'>
                <div className='header__contact'>
                  <i className='fas fa-phone'></i>
                </div>
                <div className='header__favorite'>
                  <i className='far fa-heart'></i>
                </div>
              </div>
              <div className='header__nav col-auto'>
                <Navbar navList={navLefts} />
                <div className='header__logo'>
                  <img src={Logo} alt='logo' />
                </div>
                <Navbar navList={navRights} />
              </div>
              <div className='header__info col-auto'>
                <div className='account'>
                  {user && user._id ? (
                    <>
                      <span className='text__login'>Hi {user.userName}</span>
                      <ul className='account__option shadow'>
                        <li className='account__item'>
                          <Link to='/profile/account'> {t("Profile")}</Link>
                        </li>
                        <li className='account__item' onClick={logOutOnClick}>
                          {t("Logout")}
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <i className='far fa-user'></i>
                      <ul className='account__option shadow'>
                        <li
                          className='account__item'
                          onClick={() => setLogin(true)}
                        >
                          {t("Login")}
                        </li>
                        <li
                          className='account__item'
                          onClick={() => setRegister(true)}
                        >
                          {t("Register")}
                        </li>
                      </ul>
                    </>
                  )}
                </div>
                <Link className='header__cart' to={"cart"}>
                  <i className='fas fa-shopping-cart'></i>
                  <span className={ carts.length ? "card__total" : "d-none"}>{totalItemsInCart(carts)}</span>
                </Link>
                <div className='header__menu d-lg-none'>
                  <i className='fas fa-bars'></i>
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
