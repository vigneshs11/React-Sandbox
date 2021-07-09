import React from "react";
import Box from "./BorderBox";

const recurse = ({ nest, title }) => {
  console.log(nest);
  nest = parseInt(nest) - 1;
  if (nest == 0) return <h3>{title}</h3>;
  return recurse({ nest, title });
};

const Jumbotron = ({ nest, title }) => {
  // const myFunc = this.recurse(nest, title)
  return recurse({ nest, title });
};

export default Jumbotron;
