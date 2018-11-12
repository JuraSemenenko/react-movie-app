import React from "react";
import { dateFromTime } from "../services/helpers";
const CommentFill = ({
  data,
  commentId,
  userId,
  onClickDelete,
  onClickEdit
}) => {
  return (
    <React.Fragment>
      {console.log(
        "data comment = ",
        data,
        "commentId",
        commentId,
        "userId",
        userId
      )}
      <div className="d-flex justify-content-between">
        <blockquote className="blockquote">
          <p className="mb-0">{data[commentId].text}</p>
          <footer className="blockquote-footer">
            Written by {data[commentId].authorName} on the{" "}
            <cite title="Source Title">{dateFromTime(commentId)}</cite>
          </footer>
        </blockquote>
        <div>
          <button
            type="button"
            className="btn btn-success m-1"
            disabled={!(userId == data[commentId].authorUID)}
            onClick={onClickEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger m-1"
            disabled={!(userId == data[commentId].authorUID)}
            onClick={onClickDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default CommentFill;
