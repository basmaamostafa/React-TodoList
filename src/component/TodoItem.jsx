import React, { Component } from "react";

const done = "#DFF0D8";
const undo = "#ffffff";
const doneF = "#77A275";
const undoF = "#000000";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: undo,
      fontColor: undoF,
    };
    this.handleDone = this.handleDone.bind(this);
  }

  handleDone() {
    const bgDone = this.state.bgColor == undo ? done : undo;
    const fontDone = this.state.fontColor == undoF ? doneF : undoF;
    this.setState({ bgColor: bgDone, fontColor: fontDone });
    // this.setState({ fontColor: fontDone });
  }

  render() {
    const { title, handleDelete } = this.props;
    return (
      <li
        style={{ background: this.state.bgColor }}
        className="list-group-item d-flex justify-content-between my-2"
      >
        <p style={{ color: this.state.fontColor }}> {title} </p>
        <div className="todo-icon">
          <button
            onClick={this.handleDone}
            type="button"
            class="btn btn-success mr-md-3 mx-2"
          >
            <i className="fas fa-check"></i>
          </button>
          <button
            onClick={handleDelete}
            type="button"
            class="btn btn-danger mr-md-3 "
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </li>
    );
  }
}
