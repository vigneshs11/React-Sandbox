import React from "react";
import { getDefaultCompilerOptions } from "typescript";

const Color = ["yellow", "blue", "red", "white", "darkBlue"];

const c = ({ bc }) => {
  return this.Color[{ bc }];
};

const Box = ({ bc }) => {
  const mystyle = {
    color: "black",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  console.log(bc);

  return <div style={mystyle}></div>;
};

export default Box;
