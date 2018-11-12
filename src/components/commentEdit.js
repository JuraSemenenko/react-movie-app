import React from "react";

const CommentEdit = ({
  onChange,
  commentText,
  onClickCancel,
  onClickAccept
}) => {
  return (
    <div className="container">
      <form className="row">
        <div className="form-group col-8 m-1">
          <label htmlFor="textarea">Edit your comment</label>
          <textarea
            className="form-control"
            id="textarea"
            rows="3"
            value={commentText}
            onChange={onChange}
          />
        </div>
        <div className="col">
          <button
            type="submit"
            className="btn btn-success m-1"
            onClick={onClickAccept}
          >
            Accept
          </button>
          <button
            type="submit"
            className="btn btn-warning m-1"
            onClick={onClickCancel}
          >
            Cancel
          </button>
        </div>
      </form>

      <hr />
    </div>
  );
};

export default CommentEdit;
