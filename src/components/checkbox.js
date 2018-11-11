import React from "react";

const Checkbox = ({ data, handleChacked, statusData }) => {
  return (
    <div className="m-1 p-1">
      {data.map(item => (
        <div key={item.id}>
          <input
            className="m-1"
            type="checkbox"
            id={item.id}
            name={item.name}
            value={item.id}
            onChange={handleChacked}
            checked={statusData[item.id] || false}
          />
          <label className="m-1" htmlFor={item.id}>
            {" "}
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
