import React from "react";

const Checkbox = ({ data, handleChacked, statusData }) => {
  return (
    <React.Fragment>
      {data.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            name={item.name}
            value={item.id}
            onChange={handleChacked}
            checked={statusData[item.id] || false}
          />
          <label htmlFor={item.id}> {item.name}</label>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Checkbox;
