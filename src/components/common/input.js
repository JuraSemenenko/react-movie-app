import React from "react";
const Input = ({ type, placeholder, value, handleInputChange }) => {
  return (
    <input
      className="form-control m-1 p-1"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;
