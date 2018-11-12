import React from "react";

const ChangeViewButton = ({ btnClick, isRenderGallery }) => {
  return (
    <React.Fragment>
      <button
        type="submit"
        className={isRenderGallery ? "btn btn-primary" : "btn btn-secondary"}
        onClick={btnClick}
      >
        <i className="fa fa-table" aria-hidden="true" />
      </button>
      <button
        type="submit"
        className={!isRenderGallery ? "btn btn-primary" : "btn btn-secondary"}
        onClick={btnClick}
      >
        <i className="fa fa-list" aria-hidden="true" />
      </button>
    </React.Fragment>
  );
};

export default ChangeViewButton;
