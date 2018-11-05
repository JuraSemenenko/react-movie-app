import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <div>
      <span>Add to favorites: </span>
      <i
        onClick={props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      />
    </div>
  );
};

export default Like;
