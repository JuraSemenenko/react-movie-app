import React, { Component } from "react";
import CommentEdit from "./commentEdit";
import CommentFill from "./commentFill";

import { deleteData, editData } from "../services/firebase";

class Comment extends Component {
  state = {
    commentId: "",
    isEdit: false,
    value: ""
  };

  handleDeleteComment = commentId => {
    const { commentTo, contentId } = this.props;
    const URL = `${commentTo}/${contentId}/comments/${commentId}`;
    deleteData(URL);
  };

  handleEditComment = (commentId, text) => {
    this.setState({
      commentId: commentId,
      isEdit: true,
      value: text
    });
    console.log("commentId", commentId);
  };
  handleCommentText = e => {
    this.setState({ value: e.target.value });
  };
  handleEditAccept = e => {
    e.preventDefault();
    const { commentTo, contentId } = this.props;
    const { value, commentId } = this.state;
    const URL = `${commentTo}/${contentId}/comments/${commentId}`;
    console.log("URL", URL);
    const data = {
      text: value
    };
    editData(URL, data);
    this.setState({ isEdit: false });
  };
  handleEditCancel = e => {
    e.preventDefault();
    this.setState({ isEdit: false });
  };
  render() {
    const { data, commentId, userId } = this.props;
    const { isEdit, value } = this.state;
    console.log("data", data, "commentId", commentId, "userId", userId);
    return (
      <React.Fragment>
        {!isEdit ? (
          <CommentFill
            data={data}
            commentId={commentId}
            userId={userId}
            onClickDelete={() => this.handleDeleteComment(commentId)}
            onClickEdit={() =>
              this.handleEditComment(commentId, data[commentId].text)
            }
          />
        ) : (
          <CommentEdit
            onChange={this.handleCommentText}
            commentText={value}
            onClickAccept={this.handleEditAccept}
            onClickCancel={this.handleEditCancel}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Comment;
