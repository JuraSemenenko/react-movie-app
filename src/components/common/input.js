import React from "react";
const Input = ({ type, placeholder, value, handleInputChange }) => {
  return (
    <input
      className="form-control"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;
