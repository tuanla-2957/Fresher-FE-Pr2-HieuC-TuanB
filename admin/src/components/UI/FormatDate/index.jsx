import React from "react";

const FormatDate = ({ date }) => {
  if (date) {
    const d = new Date(date);
    return (
      <div style={{ marginTop: "15px" }}>
        <div>
          <strong>{`${d.getDate()}-${
            d.getMonth() + 1
          }-${d.getFullYear()}`}</strong>
        </div>
        <div>{`${d.getHours()}:${d.getMinutes()}`}</div>
      </div>
    );
  }
  return "";
};

export default FormatDate;
