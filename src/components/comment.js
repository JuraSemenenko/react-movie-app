import React, { Component } from "react";
import firebase from "../services/firebase";

class Comment extends Component {
  state = {
    id: this.props.id,
    data: {},
    commentText: ""
  };

  componentDidMount() {
    const comments = firebase
      .database()
      .ref(this.props.commentTo + "/" + this.state.id + "/comments");
    comments.on("value", snapshot => {
      this.setState(
        { data: snapshot.val() },
        console.log("state", this.state, this)
      );
    });
  }
  handleCommentText = e => {
    this.setState({ commentText: e.target.value });
  };
  handleAddComment = e => {
    e.preventDefault();
    let user = firebase.auth().currentUser;
    const peopleId = this.state.id + "/";
    const commentId = +new Date();
    const postText = this.state.commentText;
    const authorName = user.displayName;
    const writeCommentsData = (
      userId,
      peopleId,
      commentId,
      postText,
      authorName
    ) => {
      firebase
        .database()
        .ref(this.props.commentTo + "/" + peopleId + "comments/" + commentId)
        .set({
          authoName: authorName,
          authorUID: userId,
          text: postText
        });
    };
    this.setState({ commentText: "" });
    writeCommentsData(user.uid, peopleId, commentId, postText, authorName);
  };

  render() {
    const { data } = this.state;
    const dataKeys = data ? Object.keys(data) : [];
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="textarea">Your comment</label>
            <textarea
              className="form-control"
              id="textarea"
              rows="3"
              value={this.state.commentText}
              onChange={this.handleCommentText}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleAddComment}
          >
            Add comment
          </button>
        </form>
        {dataKeys.map(key => {
          return (
            <div key={key} className="border border-primary rounded">
              <p>{data[key].authoName}</p>
              <p>
                <b>{data[key].text}</b>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comment;
