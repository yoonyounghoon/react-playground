import React, { useContext } from "react";
import ColorContext from "../contexts/color";

// 색상을 props로 받아오는 것이 아니라 ColorContext 안에 들어 있는
// Consumer라는 컴포넌트를 통해 색상을 조회합니다.
const ColorBox = () => {
  const state = useContext(ColorContext);
  return (
    <div
      style={{
        width: "64px",
        height: "64px",
        background: state.color,
      }}
    />
  );
};

export default ColorBox;
