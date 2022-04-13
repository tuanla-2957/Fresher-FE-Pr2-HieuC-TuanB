import React from "react";
import Header from "../Header";
import { Container } from "react-bootstrap";
import Sidebar from "../Sidebar";

import "./style.scss";

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container>
          <div className='layout-container'>
            <Sidebar />
            <div className='content'>{props.children}</div>
          </div>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
}
