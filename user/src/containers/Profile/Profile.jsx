import React from "react";
import "./Profile.scss";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Profile = (props) => {
  return (
    <section className='profile'>
      <div className='profile-banner'>
        <h3 className='profile-banner__title'>MY ACCOUNT</h3>
      </div>
      <div className='profile-main'>
        <Nav className='profile-nav'>
          <Nav.Item className='profile-nav__item'>
            <NavLink to={"/profile/dashboard"}>Dash board</NavLink>
          </Nav.Item>
          <Nav.Item className='profile-nav__item'>
            <NavLink to={"/profile/order"}>Order</NavLink>
          </Nav.Item>
          <Nav.Item className='profile-nav__item'>
            <NavLink to={"/profile/account"}>Account-detail</NavLink>
          </Nav.Item>
        </Nav>
        <div className='profile-content'>
          {props.children ? props.children : <h3>Dashboard</h3>}
        </div>
      </div>
    </section>
  );
};

export default Profile;
