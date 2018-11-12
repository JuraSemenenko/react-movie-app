import React, { Component } from "react";
import firebase, { writeCommentsData, deleteData } from "../services/firebase";
import { dateFromTime, getUserIdFromCookie } from "../services/helpers";
import Comment from "./comment";

class Comments extends Component {
  state = {
    id: this.props.id,
    data: {},
    commentText: "",
    userId: null
  };

  componentDidMount() {
    const PATH = `${this.props.commentTo}/${this.state.id}/comments`;
    const cookieUserId = getUserIdFromCookie();
    firebase
      .database()
      .ref(PATH)
      .on("value", snapshot => {
        this.setState({ data: snapshot.val(), userId: cookieUserId });
      });
  }

  handleCommentText = e => {
    this.setState({ commentText: e.target.value });
  };

  handleAddComment = e => {
    e.preventDefault();
    let user = firebase.auth().currentUser;
    const peopleId = this.state.id;
    const commentId = +new Date();
    const postText = this.state.commentText;
    const authorName = user.displayName;

    const setData = {
      authorName: authorName,
      authorUID: user.uid,
      text: postText
    };
    const URL = `${this.props.commentTo}/${peopleId}/comments/${commentId}`;
    this.setState({ commentText: "" });
    writeCommentsData(URL, setData);
  };

  render() {
    const { data, userId } = this.state;
    const dataKeys = data ? Object.keys(data) : [];
    return (
      <React.Fragment>
        <div className="container w-90">
          {userId && (
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
          )}
          <div className="w-100 m-3">
            {dataKeys.map(key => {
              return (
                <Comment
                  key={key}
                  data={data}
                  commentId={key}
                  contentId={this.state.id}
                  userId={userId}
                  commentTo={this.props.commentTo}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Comments;
