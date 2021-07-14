import React from "react";
import { IMAGE_SIZES, getImgPath, CONSTS } from "../reducers/constants";

export default (props) => {
  const { size, type, onClick, bottom, left } = props;
  const imgFileName = `thick-${type}-outline.png`;

  const className = `${IMAGE_SIZES[size]}`;
  const imgSrc = getImgPath(imgFileName);

  return (
    <img
      id={props.id ? props.id : ""}
      className={`image-container-${size} ${
        type === CONSTS.TYPES.WIDE ? "floating" : ""
      }`}
      src={imgSrc}
      onClick={onClick}
      style={{
        position: "absolute",
        bottom: `${bottom}%`,
        left: `${left}%`,
      }}
    />
  );
};
