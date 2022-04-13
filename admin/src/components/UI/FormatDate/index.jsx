import React from "react";

import "./style.scss";

const FormatDate = ({ date }) => {
  if (date) {
    const d = new Date(date);
    const renderDate = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const renderMonth =
      d.getMonth() < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    const renderHour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
    const renderMinutes =
      d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
    return (
      <div className='format-date'>
        <div>
          <strong>{`${renderDate}-${renderMonth}-${d.getFullYear()}`}</strong>
        </div>
        <div>{`${renderHour}:${renderMinutes}`}</div>
      </div>
    );
  }
  return "";
};

export default FormatDate;
