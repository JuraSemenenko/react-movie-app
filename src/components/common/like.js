import React from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <h4>
      <p className="badge badge-primary m-1">
        {props.liked
          ? `This ${props.content} in your favorites: `
          : "Click to add to favorites: "}
        <span
          onClick={props.onClick}
          style={{ cursor: "pointer" }}
          className={classes}
          aria-hidden="true"
        />
      </p>
    </h4>
  );
};

export default Like;
