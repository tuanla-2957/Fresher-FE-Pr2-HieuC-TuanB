import React from "react";

import "./style.scss";

export default function Button({ children, onClick, ...rest }) {
  return (
    <button className='button' onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
