import React from "react";

import "./style.scss";
/**
 * @author
 * @function Spinner
 **/

export const Spinner = (props) => {
  return (
    <div class='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
