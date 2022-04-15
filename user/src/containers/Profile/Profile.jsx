import React from "react";
import "./Profile.scss";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Profile = (props) => {
  const { t } = useTranslation();
  return (
    <section className='profile'>
      <div className='profile-banner'>
        <h3 className='profile-banner__title'>{t("MY ACCOUNT")}</h3>
      </div>
      <div className='profile-main'>
        <Nav className='profile-nav'>
          <Nav.Item className='profile-nav__item'>
            <NavLink to={"/profile/dashboard"}>{t("Dash board")}</NavLink>
          </Nav.Item>
          <Nav.Item className='profile-nav__item'>
            <NavLink to={"/profile/order"}>{t("Order")}</NavLink>
          </Nav.Item>
          <Nav.Item className='profile-nav__item'>
            <NavLink to={"/profile/account"}>{t("Account detail")}</NavLink>
          </Nav.Item>
          <Nav.Item className='profile-nav__item'>
            <NavLink to={"/profile/password"}>{t("Password")}</NavLink>
          </Nav.Item>
        </Nav>
        <div className='profile-content'>
          {props.children ? props.children : <h3>{t("Dash board")}</h3>}
        </div>
      </div>
    </section>
  );
};

export default Profile;
