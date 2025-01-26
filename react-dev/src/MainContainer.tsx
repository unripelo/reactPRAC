import "./MainContainer.css";
import React from "react";
import Content1Container from "./Content1Container";
import Content2Container from "./Content2Container";

const MainContainer = () => {
  return (
    <div>
      <Content1Container />
      <Content2Container />
    </div>
  );
};

export default MainContainer;
