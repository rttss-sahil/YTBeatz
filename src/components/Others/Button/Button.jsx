import React from "react";

const Button = ({ disabled, text }) => {
  return (
    <div>
      <button disabled={disabled}>{text}</button>
    </div>
  );
};

export default Button;
