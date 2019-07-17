import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions/actionCreator";
import "./style.css";

class AddComments extends Component {

  state = {
    comment: {
      title: "",
      body: "",
      phone: ""
    },
    visible: false
  };

  handleInput = ({ target: { value, name } }) => {
    this.setState({
      comment: { ...this.state.comment, [name]: value }
    });
  };

  handleComment = e => {
    e.preventDefault();
    const { id, addComment } = this.props;
    addComment(id, this.state.comment);
    this.setState({
      comment: {
        title: "",
        body: "",
        phone: ""
      },
      visible: false
    });
  };

  validateForm = () => {
    if (this.state.comment.title.length < 5) {
      this.setState({
        visible: true
      });
    } else {
      this.setState({
        visible: false
      });
    }
  };

  render() {
    return (
      <div className="add-comment">
        <h2 className="add-comment__title-form">Add Comment</h2>
        <form className="add-comment__form">
          <label className="add-comment__label">
            <input
              // autoFocus
              className="add-comment__input"
              type="text"
              minlength="5"
              maxlength="80"
              name="title"
              placeholder="Title"
              value={this.state.comment.title}
              onChange={this.handleInput}
              onBlur={this.validateForm}
            />
          </label>
          {this.state.visible && (
            <span className="add-comment__alert">Minimum 5 symbols!</span>
          )}
          <label className="add-comment__label">
            <input
              className="add-comment__input"
              type="text"
              maxlength="128"
              name="body"
              placeholder="Text"
              value={this.state.comment.body}
              onChange={this.handleInput}
            />
          </label>
          <label className="add-comment__label">
            <input
              className="add-comment__input"
              type="tel"
              // pattern="\(\d{3}\) \d{3}\-\d{4}"
              name="phone"
              placeholder="Pnone"
              value={this.state.comment.phone}
              onChange={this.handleInput}
            />
          </label>
          <button
            className="add-comment__send-btn"
            disabled={this.state.visible}
            onClick={this.handleComment}
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    list: state.employees
  }),
  { addComment }
)(AddComments);
