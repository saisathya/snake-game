import React from "react";

const emptyStyle = {
  "backgroundColor": "#000000",
  margin:"1px",
  height: "15px",
  width: "15px",
};

const snakeStyle = {
  "backgroundColor": "#00ff00",
  margin:"1px",
  height: "15px",
  width: "15px",
};

const foodStyle = {
  "backgroundColor": "#ff0000",
  margin:"1px",
  height: "15px",
  width: "15px",
};

const Cell = ({ value }) => {
  let style = {};
  if (value === "empty") style = emptyStyle;
  else if (value === "snake") {
    style = snakeStyle;
  } else {
    style = foodStyle;
  }

  return <div style={style}></div>;
};

export default Cell;
