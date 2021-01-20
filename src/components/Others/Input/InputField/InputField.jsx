import React from "react";
import "./InputField.scss";

const InputField = ({ name, onChange, placeholder, value }) => {
  return (
    <div>
      <input type="text" name={name} placeholder={placeholder} value={value} />
    </div>
  );
};

export default InputField;
