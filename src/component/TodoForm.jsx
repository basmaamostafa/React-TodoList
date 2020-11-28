import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, handleChange, handleSubmit } = this.props;

    return (
      <div className=" my-3">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className=" form-group mb-2">
            <label className="">Task</label>
            <input
              type="text"
              placeholder="Add Todo Item"
              className="form-control mx-4"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className=" btn btn-primary mb-2">
            Add
          </button>
        </form>
      </div>
    );
  }
}
