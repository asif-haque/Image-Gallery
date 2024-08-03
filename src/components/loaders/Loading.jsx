import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ className, type, color, width }) => {
  return (
    <ReactLoading
      className={`mx-auto my-10 ${className}`}
      type={type || `spokes`}
      color={color || `black`}
      width={width || 70}
    />
  );
};

export default Loading;
